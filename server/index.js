import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";
import pool from "./db.js";
import multer from "multer";
import path from "path";


dotenv.config();

const app = express();
const PORT = 3000;
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });


app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/bookings", async (req, res) => {
  const { name, email, checkIn, checkOut } = req.body;

  if (!name || !email || !checkIn || !checkOut) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const overlapCheck = await pool.query(
      `
      SELECT 1
      FROM bookings
      WHERE check_in_date < $1
        AND check_out_date > $2
      `,
      [checkOut, checkIn]
    );

    if (overlapCheck.rows.length > 0) {
      return res
        .status(409)
        .json({ error: "Room already booked in this date range." });
    }

    const insertResult = await pool.query(
      `
      INSERT INTO bookings (name, email, check_in_date, check_out_date)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [name, email, checkIn, checkOut]
    );

    const newBooking = insertResult.rows[0];

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Booking Confirmation – Your Stay is Confirmed!",
      text: `Hi ${name},

Your stay at ROYAL GRAND HOTEL from ${checkIn} to ${checkOut} has been confirmed.

See you soon!
Hotel Team`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      message: "Booking successful! Confirmation email sent.",
      booking: newBooking,
    });
  } catch (err) {
    console.error("Error in /bookings:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/bookings", async (req, res) => {
  const { email, checkIn } = req.body;

  if (!email || !checkIn) {
    return res.status(400).json({ error: "Email and check-in date required." });
  }

  try {
    // Check if booking exists
    const bookingResult = await pool.query(
      `SELECT * FROM bookings WHERE email = $1 AND check_in_date = $2`,
      [email, checkIn]
    );

    if (bookingResult.rowCount === 0) {
      return res.status(404).json({ error: "Booking not found." });
    }

    const booking = bookingResult.rows[0];

    await pool.query(
      `DELETE FROM bookings WHERE email = $1 AND check_in_date = $2`,
      [email, checkIn]
    );

    const cancelMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Booking Cancellation – ROYAL GRAND HOTEL",
      text: `Hi ${booking.name},

Your booking at ROYAL GRAND HOTEL from ${booking.check_in_date.toISOString().split('T')[0]} to ${booking.check_out_date.toISOString().split('T')[0]} has been successfully cancelled.

We hope to see you another time.
Warm regards,
Hotel Team`,
    };

    await transporter.sendMail(cancelMailOptions);

    return res.json({ message: "Booking cancelled. Confirmation email sent." });
  } catch (err) {
    console.error("Error in DELETE /bookings:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/upload-proof", upload.single("screenshot"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({ message: "Screenshot uploaded successfully!", filename: file.filename });
});
app.use("/uploads", express.static("uploads"));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

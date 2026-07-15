# 🏠 Hackathon Hostel Allotment System

A web application built using **SvelteKit** to automate hostel room allocation for hackathon participants.

## 🚀 Features

- 📂 Upload Hostel Availability Excel file
- 👨‍🎓 Upload Participants Excel file
- 🎲 Random hostel room allocation based on gender and room capacity
- 📋 Display hostel data in a table
- 📊 Display final hostel allotment table
- 🔍 Search students by Student ID or Name
- 📥 Download final allotment as an Excel file
- 🔄 Reset uploaded data and allocation results
- 📱 Responsive user interface using Tailwind CSS

---

## 🛠️ Tech Stack

- SvelteKit
- JavaScript
- Tailwind CSS
- XLSX Library

---

## 📂 Input Files

### Hostel Availability

| Hostel Name | Room Number | Capacity | Gender |
|-------------|------------:|---------:|--------|
| A | 101 | 4 | Male |
| A | 102 | 4 | Female |

### Participants

| Student ID | Student Name | Gender |
|------------|--------------|--------|
| 25ST10001 | Rahul Kumar | Male |

---

## 📄 Output

The generated Excel file contains:

| Student ID | Student Name | Gender | Hostel | Room Number |
|------------|--------------|--------|--------|-------------|

---

## ▶️ Installation

```bash
git clone https://github.com/nitish6759/Hackathon-Hostel-Allotment.git

cd Hackathon-Hostel-Allotment

npm install

npm run dev
```

---

## 🎯 Future Improvements

- Dashboard statistics
- Dark mode
- Pagination
- Better UI/UX
- Drag & Drop Excel Upload
- Hostel allocation summary

---

## 👨‍💻 Author

**Nitish Kumar**

B.Tech CSE, NIT Silchar

GitHub: https://github.com/nitish6759

---

## 📜 License

This project was developed for the **Web Team Selection Process**.

# React + TypeScript + Vite

A responsive web application that fetches real-time financial data from the SEC EDGAR API and visualizes it using interactive charts.

## Features

Search companies using CIK number
Quick pick for popular companies
Visualize Assets, Liabilities, Revenue using charts
AI-based summary (frontend logic)
Filter financial data by years (3 / 5 years)
Export data as CSV
Loading spinner for better UX
Handles empty state (No data found)

## Tech Stack

React (Vite)
TypeScript
Axios
Chart.js (react-chartjs-2)
CSS (custom styling)

## Installation

git clone <https://github.com/pinkysingh7006/Assignment-project/tree/feature/search-bar/tech-assignment>
cd project-folder
npm install
npm run dev

## How It Works

User enters a CIK number or selects a company.
Data is fetched from the SEC EDGAR API.
Financial data is processed and filtered.
Charts are rendered for:
Assets
Liabilities
Revenue
Users can:
Filter last 3 or 5 years
Export data as CSV
View AI-generated summary

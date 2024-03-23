const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  const sql = "SELECT * FROM MAHASISWA"
    db.query(sql, (error, result) => {
      // hasil data dari mysql
      response(200, result, "get all data from mahasiswa", res)
    })
})

app.get('/name', (req, res) => {
  const sql = `SELECT nama_lengkap FROM mahasiswa WHERE nim = ${req.query.nim}`
  db.query(sql, (error, result) => {
    response(200,result, "find mahasiswa name", res)
  })
})

app.get('/alamat', (req,res) => {
  const sql = `SELECT alamat FROM mahasiswa WHERE nim = ${req.query.nim}`
  db.query(sql, (error, result) => {
    response(200,result, "find mahasiswa alamat", res)
  })
})

app.get('/kelas', (req, res) => {
  const sql = `SELECT kelas FROM mahasiswa WHERE nim = ${req.query.nim}`
  db.query(sql, (error, result) => {
    response(200,result,"find mahasiswa kelas", res)
  })
})

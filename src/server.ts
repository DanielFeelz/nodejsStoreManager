import express from 'express'
import routes from './routes/toExportRoute'

const app = express()
app.use(express.json())
app.use('/', routes)

app.listen(8145, () =>
  console.info(`Server started successfully.. [${new Date().toISOString()}]`),
)

import {app} from './app'
import { env } from './env'

app.listen(({
  host: '0.0.0.0', // facilita a conexão futura conexão com frontend etc...
  port: env.PORT
})).then(() => console.log('🚀 Server is running on port 3333'))
/*
change currency from ${currency1} to ${currency2}
add ${item-title} to the backet
remove ${item-title} from the backet
navigate to ${url} page
sort by ${title}
time of action in utc forma (+new Date())
*/

export const LOG_CHANGE_CURRENCY = 'middleware/logs/LOG_CHANGE_CURRENCY'
export const LOG_ADD_PRODUCTS = 'middleware/logs/LOG_ADD_PRODUCTS'
export const LOG_REMOVE_PRODUCTS = 'middleware/logs/LOG_REMOVE_PRODUCTS'
const LOG_LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
export const LOG_SORTING = 'middleware/logs/LOG_SORTING'

function toServer(text) {
  const date = new Date()
  fetch('/api/v1/logs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: `${text} at ${date.toISOString()}`
    })
  })
    .then((res) => {
      return res.json()
    })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

const logs = () => {
  return () => (next) => (action) => {
      switch (action.type) {
        case LOG_CHANGE_CURRENCY: {
          toServer(
            `change currency from ${action.payload.lastCurrency} to ${action.payload.newCurrency}`
          )
          break
        }
        case LOG_ADD_PRODUCTS: {
          toServer(`add ${action.payload.itemTitle} to the backet`)
          break
        }
        case LOG_REMOVE_PRODUCTS: {
          toServer(`remove ${action.payload.itemTitle} from the backet`)
          break
        }
        case LOG_LOCATION_CHANGE: {
          toServer(`navigate to ${action.payload.location.pathname} page`)
          break
        }
        case LOG_SORTING: {
          toServer(`sort by ${action.payload.title}`)
          break
        }
        default:
          return next(action)
      }
      return next(action)
    }
  }

export default logs()

import { useState } from 'react'
import { data } from '../data/currency'
import moment from 'moment'

type Currency = {
    currency: string,
    date: string,
    price: number,
    flag: any
} | null
const Home = () => {
    const [currencyFrom, setCurrencyFrom] = useState<Currency>(null)
    const [currencyTo, setCurrencyTo] = useState<Currency>(null)
    const [price, setPrice] = useState(0)

    return (
        <div className='d-flex   justify-content-center align-items-center' style={{ height: '100vh', background: '#cccced' }}>
            <div className="card shadow border-0"  >
                <div className="card-body">
                    <h5 className="card-title text-center">Currency conversion</h5>
                    <div className='mt-5'>Calculate conversion between currencies</div>
                    <div className='d-flex gap-2 align-items-center mt-2 mb-2'>
                        <input onChange={(e) => {
                            setPrice(+e.target.value)
                        }} type="number" className="form-control" placeholder="?" aria-label="Username" aria-describedby="basic-addon1" />

                        <div className="dropdown">
                            <button className="btn btn-secondary d-flex align-items-center gap-2  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {currencyFrom ? <>
                                    <img src={currencyFrom?.flag} className='mr-2' style={{ width: 20, height: 20 }} />
                                    <span>{currencyFrom?.currency}</span>
                                </> : 'Currency'}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {data.map((it: Currency) =>
                                    <li key={it?.currency}>
                                        <div onClick={() => {
                                            setCurrencyFrom(it)
                                        }} className="dropdown-item" style={{ cursor: 'pointer' }}  >
                                            <img src={it?.flag} className='mr-2' style={{ width: 20, height: 20 }} />
                                            <span className='ml-2'>{' '} {it?.currency}</span>
                                        </div>
                                    </li>)}
                            </ul>
                        </div>
                        <div> = </div>
                        <div> {!!price && currencyTo && currencyFrom ? price * currencyTo.price / currencyFrom.price : '?'}  </div>

                        <div className="dropdown">
                            <button className="btn btn-secondary d-flex align-items-center gap-2  dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                {currencyTo ? <>
                                    <img src={currencyTo?.flag} className='mr-2' style={{ width: 20, height: 20 }} />
                                    <span>{currencyTo?.currency}</span>
                                </> : 'Currency'}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                {data.map((it: Currency) =>
                                    <li key={it?.currency}>
                                        <div onClick={() => {
                                            setCurrencyTo(it)
                                        }} className="dropdown-item" style={{ cursor: 'pointer' }}  >
                                            <img src={it?.flag} className='mr-2' style={{ width: 20, height: 20 }} />
                                            <span className='ml-2'>{' '} {it?.currency}</span>
                                        </div>
                                    </li>)}
                            </ul>
                        </div>
                    </div>
                    {!!price && currencyTo && currencyFrom && <div>Results are based on exchange rates on: {moment(currencyTo.date).format('DD/MM/YYYY H:mm:ss')}</div>}

                </div>
            </div>
        </div>
    )
}

export default Home

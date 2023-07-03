import React, { useState } from 'react'

export default function Content({ cartValue, data }) {

    let [toggle, setToggle] = useState(true);

    return <>
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{data.product}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div>
                        {data.offAmount ? data.offAmount : data.orgAmount}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        {
                            toggle ? <button className="btn btn-outline-dark mt-auto" onClick={() => {
                                cartValue(res => res + 1)
                                setToggle(!toggle)
                            }}>
                                Add to cart
                            </button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={() => {
                                    cartValue(res => res - 1)
                                    setToggle(value => !value)
                                }}>
                                    Remove
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

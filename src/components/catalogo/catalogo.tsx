import React from 'react'

const Catalogo = () => {
    return (
        <>
            <div className='container'>
                <div className='row mt-4 w-100'>
                    {/* <div className='col-md-4'> */}
                        <div className='d-flex justify-content-around flex-wrap' style={{ gap: '20px' }}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Repite esta estructura para cada fila --> */}
                </div>
            {/* </div> */}

        </>
    )
}

export default Catalogo

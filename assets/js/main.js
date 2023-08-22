const url = 'https://swapi.dev/api/people'

const consultarAPI = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(resp => resp.json()).then(data => {
            console.log(data);
            resolve(data)
        })
    })
}

function* generador1(){
    yield consultarAPI(`${url}/1?format=json`).then(resp => $("#timeline-container").append(`
    
                                        <div class="col-12 col-md-6 col-lg-4">
                                        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                            <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                                            <div class="timeline-text">
                                            <h6>${resp.name}</h6>
                                            <p>Altura: ${resp.height} cm</p>
                                            <p>kilos: ${resp.mass} kg</p>
                                            </div>
                                        </div>
                                    </div>
    `));
    yield consultarAPI(`${url}/2?format=json`).then(resp => $("#timeline-container").append(`
    
    <div class="col-12 col-md-6 col-lg-4">
    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
        <div class="timeline-text">
        <h6>${resp.name}</h6>
        <p>Altura: ${resp.height} cm</p>
        <p>kilos: ${resp.mass} kg</p>
        </div>
    </div>
</div>
`));
    yield consultarAPI(`${url}/3?format=json`).then(resp => $("#timeline-container").append(`
    
    <div class="col-12 col-md-6 col-lg-4">
    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
        <div class="timeline-text">
        <h6>${resp.name}</h6>
        <p>Altura: ${resp.height} cm</p>
        <p>kilos: ${resp.mass} kg</p>
        </div>
    </div>
</div>
`));
    yield consultarAPI(`${url}/4?format=json`).then(resp => $("#timeline-container").append(`
    
    <div class="col-12 col-md-6 col-lg-4">
    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
        <div class="timeline-text">
        <h6>${resp.name}</h6>
        <p>Altura: ${resp.height} cm</p>
        <p>kilos: ${resp.mass} kg</p>
        </div>
    </div>
</div>
`));
    yield consultarAPI(`${url}/5?format=json`).then(resp => $("#timeline-container").append(`
    
    <div class="col-12 col-md-6 col-lg-4">
    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
        <div class="timeline-text">
        <h6>${resp.name}</h6>
        <p>Altura: ${resp.height} cm</p>
        <p>kilos: ${resp.mass} kg</p>
        </div>
    </div>
</div>
`));
}

function* generador2(){
    yield consultarAPI(`${url}/6?format=json`).then(resp => $("#timeline-container-azul").append(`
    <div class="col-12 col-md-6 col-lg-4">
    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon"><i class="fa fa-briefcase" aria-hidden="true"></i></div>
        <div class="timeline-text">
        <h6>${resp.name}</h6>
        <p>Altura: ${resp.height} cm</p>
        <p>kilos: ${resp.mass} kg</p>
        </div>
    </div>
</div>
    
    
`));
yield consultarAPI(`${url}/7?format=json`).then(resp => $("#timeline-container-azul").append(`
<div class="col-12 col-md-6 col-lg-4">
<div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
    <div class="timeline-icon"><i class="fa fa-briefcase" aria-hidden="true"></i></div>
    <div class="timeline-text">
    <h6>${resp.name}</h6>
    <p>Altura: ${resp.height} cm</p>
    <p>kilos: ${resp.mass} kg</p>
    </div>
</div>
</div>


`));
yield consultarAPI(`${url}/8?format=json`).then(resp => $("#timeline-container-azul").append(`
<div class="col-12 col-md-6 col-lg-4">
<div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
    <div class="timeline-icon"><i class="fa fa-briefcase" aria-hidden="true"></i></div>
    <div class="timeline-text">
    <h6>${resp.name}</h6>
    <p>Altura: ${resp.height} cm</p>
    <p>kilos: ${resp.mass} kg</p>
    </div>
</div>
</div>


`));
yield consultarAPI(`${url}/9?format=json`).then(resp => $("#timeline-container-azul").append(`
<div class="col-12 col-md-6 col-lg-4">
<div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
    <div class="timeline-icon"><i class="fa fa-briefcase" aria-hidden="true"></i></div>
    <div class="timeline-text">
    <h6>${resp.name}</h6>
    <p>Altura: ${resp.height} cm</p>
    <p>kilos: ${resp.mass} kg</p>
    </div>
</div>
</div>


`));
yield consultarAPI(`${url}/10?format=json`).then(resp => $("#timeline-container-azul").append(`
<div class="col-12 col-md-6 col-lg-4">
<div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
    <div class="timeline-icon"><i class="fa fa-briefcase" aria-hidden="true"></i></div>
    <div class="timeline-text">
    <h6>${resp.name}</h6>
    <p>Altura: ${resp.height} cm</p>
    <p>kilos: ${resp.mass} kg</p>
    </div>
</div>
</div>


`));
}

function* generador3(){
    yield consultarAPI(`${url}/11?format=json`).then(resp => $("#timeline-container-verde").append(`
    
   
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="single-timeline-content d-flex wow fadeInLeft"  data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                            <div class="timeline-icon"><i class="fa fa-briefcase" aria-hidden="true"></i></div>
                                            <div class="timeline-text">
                                            <h6>${resp.name}</h6>
                                            <p>Altura: ${resp.height} cm</p>
                                            <p>kilos: ${resp.mass} kg</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
`));
yield consultarAPI(`${url}/12?format=json`).then(resp => $("#timeline-container-verde").append(`
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                        <div class="timeline-icon"><i class="fa fa-id-card" aria-hidden="true"></i></div>
                                        <div class="timeline-text">
                                        <h6>${resp.name}</h6>
                                        <p>Altura: ${resp.height} cm</p>
                                        <p>kilos: ${resp.mass} kg</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
`));
yield consultarAPI(`${url}/13?format=json`).then(resp => $("#timeline-container-verde").append(`
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                        <div class="timeline-icon"><i class="fa fa-id-card" aria-hidden="true"></i></div>
                                        <div class="timeline-text">
                                        <h6>${resp.name}</h6>
                                        <p>Altura: ${resp.height} cm</p>
                                        <p>kilos: ${resp.mass} kg</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
`));
yield consultarAPI(`${url}/14?format=json`).then(resp => $("#timeline-container-verde").append(`
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                        <div class="timeline-icon"><i class="fa fa-id-card" aria-hidden="true"></i></div>
                                        <div class="timeline-text">
                                        <h6>${resp.name}</h6>
                                        <p>Altura: ${resp.height} cm</p>
                                        <p>kilos: ${resp.mass} kg</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
`));
yield consultarAPI(`${url}/15?format=json`).then(resp => $("#timeline-container-verde").append(`
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                        <div class="timeline-icon"><i class="fa fa-id-card" aria-hidden="true"></i></div>
                                        <div class="timeline-text">
                                        <h6>${resp.name}</h6>
                                        <p>Altura: ${resp.height} cm</p>
                                        <p>kilos: ${resp.mass} kg</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
`));





}
const g1 = generador1()
const g2 = generador2()
const g3 = generador3()

$(document).ready(function(){
    $("#lista1").mouseenter(function() {
        g1.next()
    })

    $("#lista2").mouseenter(function() {
        g2.next()
    })

    $("#lista3").mouseenter(function() {
        g3.next()
    })
})
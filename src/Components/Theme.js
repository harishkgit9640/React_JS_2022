import { useState } from "react";
import PropTypes from 'prop-types'

export default function Theme(props) {

    const [normalMode, setMode] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black'

    })

    const darkMode = () => {
        if (normalMode.color === 'black' || normalMode.color === 'white') {
            setMode({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })

        }
    }
    const LightMode = () => {
        if (normalMode.color === 'white') {
            setMode({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black'

            })
        }
    }

    const blueMode = () => {
        if (normalMode.color === 'black' || normalMode.color === 'white') {
            setMode({
                color: 'white',
                backgroundColor: 'blue',
                border: '1px solid white'

            })
        }
    }

    const grayMode = () => {
        if (normalMode.color === 'black' || normalMode.color === 'white') {
            setMode({
                color: 'white',
                backgroundColor: 'gray',
                border: '1px solid white'

            })
        }
    }

    const greenMode = () => {
        if (normalMode.color === 'black' || normalMode.color === 'white') {
            setMode({
                color: 'white',
                backgroundColor: 'green',
                border: '1px solid white'

            })
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-around p-2 my-2" style={normalMode}>
                <h2>{props.title}</h2>
                <button type="button" className="btn btn-light ms-3 px-3" onClick={LightMode}>Light</button>
                <button type="button" className="btn btn-dark ms-3 px-3" onClick={darkMode} >Dark</button>
                <button type="button" className="btn btn-primary ms-3 px-3" onClick={blueMode} >Blue</button>
                <button type="button" className="btn btn-secondary ms-3 px-3" onClick={grayMode} >Gray</button>
                <button type="button" className="btn btn-success ms-3 px-3" onClick={greenMode} >Green</button>
            </div>

            <div className="container p-5 my-2" style={normalMode} >
                <h1 className=""> This is Card</h1>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item" style={normalMode}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={normalMode} >
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body" style={normalMode}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={normalMode}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={normalMode}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body" style={normalMode}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={normalMode}>
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={normalMode}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body" style={normalMode}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body" style={normalMode}>
                    <h3>{props.subtitle}</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum repudiandae sint error, soluta nobis enim, inventore voluptatum sunt minima consectetur, asperiores nulla vero iusto maiores perferendis facilis? Natus voluptatum ab libero consequuntur veritatis nostrum sunt quasi animi eius ad. Neque beatae praesentium aut dolorem voluptate ad quod nulla! Error quidem amet sed voluptatem alias doloribus, est repellendus? Molestias doloribus maxime blanditiis minima qui beatae repudiandae veniam, odio voluptatum praesentium officiis quibusdam autem quidem officia reiciendis tempora, distinctio doloremque voluptate, sapiente a velit? Et possimus nulla numquam iste ea deleniti perspiciatis aut recusandae esse repudiandae nihil vero, repellat, facilis alias perferendis?</p>
                </div>
            </div>

        </>
    )
}

Theme.prototype = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

Theme.defaultProps = { title: 'Set title here', subtitle: 'Set Subtitle' };

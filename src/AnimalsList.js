import React, { Component } from 'react'

class AnimalsList extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animals =>
                    <div key={animals.id}>
                        {animals.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default AnimalsList
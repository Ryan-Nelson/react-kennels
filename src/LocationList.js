import React, { Component } from 'react'


export default class LocationList  extends Component {
    render() {
        return (
            <section className="location">
            {
                this.props.locations.map(locations =>
                    <div key={locations.id}>
                        {locations.name}
                    </div>
                )
            }
            </section>
        )
    }
}
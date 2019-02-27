import React, { Component } from 'react'

class OwnersList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owners =>
                    <div key={owners.id}>
                        {owners.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnersList
import React from 'react'

export class T24 extends React.PureComponent {
    render(){
        const {time} = this.props;
        const date = new Date(time*1000)
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        console.log("T24 render")

        return `${hours}:${minutes}:${seconds}`
    }
}
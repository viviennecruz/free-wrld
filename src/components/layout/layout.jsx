import React, { Component } from 'react';
import Header from "../navigation/header/header";
import Footer from "../navigation/footer/footer";


class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                    {this.props.children}
                <Footer/>
            </div>
        )
   }   
}

export default Layout
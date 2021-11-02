import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from "reactstrap";

class Menu extends Component {

    // 继承父类
    constructor(props){
        super(props);
        this.state = {
            selected: null
            
        };
    }

    Onselect(dish){
        this.setState({
            selected: dish
        })

    }
    renderDish(dish) {
        if (dish != null)
            return(
               <div>
                   <Card className="col-12 col-md-5 mt-5">
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                   
                    
                </div>
                
            );
        else
            return(
                <div></div>
            );
    }
    rendercoms(dish) {
        if(dish != null)
        return(
            <Card className="col-12 col-md-5 mt-5">
            {dish.description}
        </Card>
        );
        else
         return(
            <div></div>
         );
    }
    // 渲染
    render(){

        const menu = this.props.dishes.map((dish) =>{
            return(
                <div key={dish.id} className="col-12 col-md-5 mt-5">
                    <Card onClick = {() => this.Onselect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return(
            <div className="container">
                <div className="row">
                     {menu}
                    
                </div>
                <div className="row col-xs-6">
                    {this.renderDish(this.state.selected)}

                </div>
                <div className="row col-xs-6">
                    {this.rendercoms(this.state.selected)}

                </div>
            </div>
        );
    }
}

export default Menu;
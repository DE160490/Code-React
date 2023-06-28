import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishesComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {
  Routes,
  Route,
  Navigate,
  useParams,
  withRouter,
} from "react-router-dom";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Login from "./Login";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          {/* <Route exact path='/aboutus' element={() => <About leaders={this.props.leaders} />}/> */}
          <Route
            exact
            path="/menu"
            element={
              <Menu
                dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}
              />
            }
          />
          <Route exact path="/contactus" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/menu/:dishId" element={<DishWithId />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
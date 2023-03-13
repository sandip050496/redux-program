import { connect } from "react-redux";
import { addToCart, removeToCart } from "../services/actions/action";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
    cartDataItem: state.cartItem
})

const mapDispatchToProps = (dispatch) => ({
    addToCarthandler : (data) => dispatch(addToCart(data)),
    removeToCartHandler : (data) => dispatch(removeToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);
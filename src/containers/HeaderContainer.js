import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = (state) => ({
    cartDataItem: state.cartItem
})

const mapDispatchToProps = (dispatch) => ({
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);
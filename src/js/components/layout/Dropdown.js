import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import { media } from 'js/constants/media';

import Button from 'js/components/common/Button';
import TextBox from 'js/components/common/TextBox';
import Auth from 'js/components/auth/Auth';


const mapStateToProps = ({ UI }) => ({

});

const mapDispatchToProps = (dispatch) => ({

});


@connect(mapStateToProps, mapDispatchToProps)
class Dropdown extends Component {

    render() {
        const {

        } = this.props;

        return (
            <Wrapper>
                <Auth/>
            </Wrapper>
        )
    }
}


export default Dropdown;


const Appear = keyframes`
    from {
        opacity: 0;
        transform: translateY(45px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 250px;
    right: 0;
    position: absolute;
    padding: 25px 25px 30px;
    box-shadow: 0 10px 21px 0 rgba(173,182,217,0.3);
    animation: ${Appear} 0.2s linear;
    z-index: 9999;
`;

const InputWrapper = styled.div`
    margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
    margin-top: 15px;
    height: 40px;
`;

const StyledTextBox = styled(TextBox)`
    div {
        font-size: 14px;
    }
    input {
        height: 30px;
    }
`;

const StyledButton = styled(Button)`
    font-size: 16px;
    height: 40px;
`;

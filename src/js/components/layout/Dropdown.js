import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import { media } from 'js/constants/media';

import * as UIActions from 'js/actions/UIActions';
import * as FilterActions from 'js/actions/FilterActions';

import Button from 'js/components/common/Button';
import TextBox from 'js/components/common/TextBox';


class Dropdown extends Component {

    render() {
        const {

        } = this.props;

        return (
            <Wrapper>
                <InputWrapper>
                    <StyledTextBox label="Логин" />
                </InputWrapper>
                <InputWrapper>
                    <StyledTextBox label="Пароль" type="password" />
                </InputWrapper>
                <ButtonWrapper>
                    <StyledButton inverted>Войти</StyledButton>
                </ButtonWrapper>
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ UI }) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);

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

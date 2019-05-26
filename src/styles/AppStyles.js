import styled from 'styled-components';

exports.Wrapper = styled.div`
  background-color: #eee;
  padding: 10px;
  display: inline-block;
  max-width: 350px;
  font-family: Helvetica, Arial;
  > div + div {
    margin-top: 10px;
  }
`;

exports.Title = styled.div`
  font-weight: 400;
  font-size: 25px;
`;

exports.Box = styled.div`
  border: 1px solid #000;
  padding: 0;
  background-color: #fff;
  font-size: 13px;
`;

exports.BoxPad = styled(exports.Box)`
  padding: 5px;
`;

exports.InputRowTitle = styled.div`
  font-size: 13px;
  display: inline-block;
  line-height: 25px;
`;

exports.InputValue = styled.input`
  float: right;
  padding: 5px;
  border: 1px solid #ccc;
  outline: none;
  width: 50px;
`;

exports.InputWrapper = styled.div`
  margin: 5px;
`;

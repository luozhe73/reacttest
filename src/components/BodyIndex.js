import React from 'react';
import ReactDOM from 'react-dom';

class BodyIndex extends React.Component {

    render() {
        var userName = '';
        var boolInput = false;
        return (
            <div>
                <h1>这里是主体</h1>
                <p>{userName === '' ? '用户未登录' : '用户名:' + userName}</p>
                <p><input type='button' value='默认按钮' disabled={boolInput}/></p>
            </div>
        )
    }
}

export default BodyIndex;
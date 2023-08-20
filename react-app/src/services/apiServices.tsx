import axios from 'axios';


const postCreateNewUser = (email, password, username, role, image) => {
    //Khi sử dụng file thì bắt buộc phải dùng formdata để có thể gửi data lên sever
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('http://localhost:8081/api/v1/participant', data);
}

export { postCreateNewUser }
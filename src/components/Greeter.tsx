import React from 'react';

// props 가 여러개 있을 경우 interface 로 정의
interface GreeterProps {
	person: string;
}

// person 을 props 객체에서 구조 분해
const Greeter = ({person}: GreeterProps): JSX.Element => {
	return <h1>hello! {person}</h1>

}

export default Greeter;
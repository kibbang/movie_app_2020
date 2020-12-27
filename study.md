# HTML과 JS의 조합을 JSX라고 함 
    리액트에서만 사용되는 개념 index.js의 7번째줄.. 
    컴포넌트를 만드는 방법임
    props = component의 재사용을 하기 위해 사용 <prop Name "Value" >
    component의 처음은 대문자로 적음
    map()->array의 각 아이템에서 함수를 실행하는 array를 가지는 js함수
    그 함수의 결과를 array로 가져다 줌
    ex) food.map(arg)
# React는 자동적으로 class Component의 render Methods를 실행 함
    class Component를 쓰는 이유
    state기 때문에
    state = object 
    데이터를 넣을 공간이 있고 데이터는 변함
    state에 데이터를 넣음
    문제는 데이터를 어떻게 바꾸는가
    setState를 사용한다
    매 순간 setState를 호출할 때마다 react는 새로운 state와 함께 render함수를 실행 함
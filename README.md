

[해당 강좌](https://academy.nomadcoders.co/p/styled-components-like-a-boss)를 실습한 코드입니다.

| Start Date | End Date | Update Date |
| ---------- | -------- | ----------- |
| 2018-10-28 |          | 2018-10-28  |



##### #3 injectGlobal and Extend ([commit](https://github.com/ph-value/styled-components-example/commit/67b1b75cf71d00337eceffe9c7385c61295ff780))

- v4에서 injectGlobal가 createGlobalStyle로 변경.

  > The injectGlobal API was removed and replaced by createGlobalStyle in styled-components v4. [document link](https://www.styled-components.com/docs/api#deprecated-injectglobal)



- withComponent() 와 extend()의 사용

  ```javascript
  const Anchor = Button.withComponent("a").extend`
      text-decoration: none;
  `;
  ```

  위의 코드는 **extend is not function** 에러가 난다.

  아래 코드와 같이 표현해야 원하는 결과를 얻는다.

  ```javascript
  const Anchor = styled(Button.withComponent('a'))`
      text-decoration: none;
  `;
  ```

  [참고한 링크](https://github.com/styled-components/styled-components/issues/1546#issuecomment-373281955)
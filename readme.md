##

```
docker-compose up -d --build
```

## 3-layer architecture

controller(routes) -- service -- data access

모든 비즈니스 로직은 service에!

## logger

winston : 로그 파일, 로그 레벨 관리
morgan : request 요청 로깅

## 설정

node js에서 esm 방식으로 typescript를 사용하려고 함.
ts-node --esm으로 잘 사용 가능함.

alias를 사용하려고 했는데, module-alias라는 라이브러리를 사용해야 함.
이 경우 esm에서 잘 작동 안 함.
ts-node가 아니라 babel-node를 사용해서 babel에서 alias사용하는 경우 찾음.
but, babel-node가 정상 작동을 안 함...

다시 cjs로 돌아가거나 alias를 안써야.. ㅠㅜ

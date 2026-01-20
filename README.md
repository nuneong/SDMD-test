# SDMD Test

지식기반 자동화 마케팅 플랫폼

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 기술 스택

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Vercel 배포 가이드

### 방법 1: Vercel CLI 사용 (권장)

1. **Vercel CLI 설치**
   ```bash
   npm i -g vercel
   ```

2. **Vercel 로그인**
   ```bash
   vercel login
   ```

3. **프로젝트 배포**
   ```bash
   vercel
   ```
   
   첫 배포 시 다음 질문에 답변:
   - Set up and deploy? → **Y**
   - Which scope? → 본인의 계정 선택
   - Link to existing project? → **N** (새 프로젝트)
   - Project name? → 원하는 프로젝트 이름 입력 (또는 Enter로 기본값 사용)
   - Directory? → **./** (Enter)
   - Override settings? → **N**

4. **프로덕션 배포**
   ```bash
   vercel --prod
   ```

### 방법 2: GitHub 연동 (자동 배포)

1. **GitHub에 코드 푸시**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Vercel 웹사이트에서 배포**
   - [vercel.com](https://vercel.com) 접속
   - "Add New..." → "Project" 클릭
   - GitHub 저장소 선택
   - 프로젝트 설정:
     - Framework Preset: **Next.js** (자동 감지됨)
     - Root Directory: **./** (기본값)
     - Build Command: `npm run build` (기본값)
     - Output Directory: `.next` (기본값)
   - "Deploy" 클릭

3. **자동 배포 설정**
   - 이후 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다
   - Pull Request 생성 시 프리뷰 배포가 자동 생성됩니다

### 환경 변수 설정

환경 변수가 필요한 경우:

1. **Vercel 대시보드에서**
   - 프로젝트 → Settings → Environment Variables
   - 변수 추가 후 재배포

2. **CLI로 설정**
   ```bash
   vercel env add VARIABLE_NAME
   ```

### 배포 확인

배포 완료 후:
- Vercel이 자동으로 생성한 URL로 접속하여 확인
- 예: `https://your-project-name.vercel.app`

### 유용한 명령어

```bash
# 배포 상태 확인
vercel ls

# 배포 로그 확인
vercel logs

# 프로젝트 정보 확인
vercel inspect

# 환경 변수 확인
vercel env ls
```


# 근거하여 본 선편광과 원편광의 구별 가능성

## 집행 요약

질문의 핵심 명제는 **절반은 맞고 절반은 틀립니다**. 맞는 부분은, 완전히 코히런트한 단색 평면파가 \(+z\) 방향으로 진행할 때 선편광은
\[
\mathbf E_{\mathrm L}(z,t)=E_0\hat{\mathbf x}\cos(kz-\omega t+\phi)
\]
처럼 쓸 수 있어서, 고정된 시각 \(t\)에 따라 \(z\)축 위에 \(\mathbf E=0\)인 점들이 주기적으로 존재한다는 점입니다. 반대로 원편광은
\[
\mathbf E_{\mathrm C}(z,t)=A\hat{\mathbf x}\cos\xi \pm A\hat{\mathbf y}\sin\xi,\qquad \xi=kz-\omega t+\phi
\]
이므로 \(|\mathbf E|=A\)가 모든 \(z,t\)에서 일정합니다. MIT OCW의 편광 장과 Jones 벡터 정식화는 바로 이 점을 명시합니다. citeturn23view0turn3view0

틀린 부분은, 이런 차이를 **“확률밀도”의 차이**로 해석하는 것입니다. 고전 전자기학에서 \(\mathbf E(\mathbf r,t)\)는 확률밀도가 아니라 **결정론적 장**입니다. 고전적으로 관측 가능한 양은 보통 에너지 밀도, 포인팅 벡터, 시간평균 강도, 혹은 불완전 코히런스가 있을 때의 coherency matrix와 Stokes 매개변수입니다. 단색 평면파의 경우 시간평균 강도는 \(|Z|^2=|\psi_1|^2+|\psi_2|^2\)에만 비례하며, 선편광인지 원편광인지는 그 자체로 강도를 바꾸지 않습니다. 부분편광이나 확률적 기술이 필요할 때도 확률은 “장의 실현(realization)”이나 검출 사건의 통계에 붙지, 순간장 \(\mathbf E\) 자체가 곧 확률밀도는 아닙니다. citeturn4view2turn21search6

양자광학에서는 더 분명합니다. **단일광자 편광 상태**는 \(|H\rangle, |V\rangle\) 같은 2차원 힐베르트 공간의 벡터이며, 단일광자 Fock 상태에서는 편광이 선형이든 원형이든 \(\langle \hat{\mathbf E}(\mathbf r,t)\rangle=0\)입니다. 즉 “순간적인 전기장 파형”은 단일광자를 기술하는 기본량이 아닙니다. 광검출 확률은 Glauber 이론에 따라
\[
P(\mathbf r,t)\propto \langle \hat{\mathbf E}^{(-)}(\mathbf r,t)\hat{\mathbf E}^{(+)}(\mathbf r,t)\rangle
\]
로 주어지며, 평면파 단일모드에서 편광을 분석하지 않는 검출기라면 이 양은 선편광과 원편광을 **같은 평균 검출율**로 줄 수 있습니다. 차이는 편광 분석기, 위상지연판, 간섭계, 혹은 양자상태 토모그래피를 통해 **투영측정**을 할 때 드러납니다. citeturn13view1turn13view2turn27view0

따라서 결론은 간단합니다. **선편광과 원편광은 서로 다른 편광 상태이므로 물리적으로 구별 가능하지만, 그 구별의 본질은 “선편광에는 순간장 영점이 있고 원편광에는 없다”는 사실 자체가 아니라, 둘이 같은 2차원 편광 공간의 서로 다른 상태이며 검출기가 실제로 무엇을 측정하느냐에 달려 있다는 점**입니다. 원편광이 “더 근본적”이라는 주장도 절반만 맞습니다. 회전 대칭 아래에서는 원편광이 고유상태이므로 수학적으로 더 자연스럽지만, 물리적으로는 선편광·원편광 모두 같은 편광 공간의 정당한 기저 선택입니다. citeturn4view2turn19search3

## 고전 전자기학에서의 편광

단색 평면파가 \(+z\) 방향으로 진행한다고 가정하면, 일반적인 횡전기장 표현은
\[
\mathbf E(z,t)=
\Re\!\left[
\big(A_x e^{i\phi_x}\hat{\mathbf x}+A_y e^{i\phi_y}\hat{\mathbf y}\big)e^{i(kz-\omega t)}
\right]
\]
이며, 이는 실수장으로 쓰면
\[
E_x=A_x\cos\xi,\qquad
E_y=A_y\cos(\xi+\delta),
\]
\[
\xi=kz-\omega t+\phi_x,\qquad \delta=\phi_y-\phi_x
\]
가 됩니다. 이 정식화는 Jones 벡터, 선편광, 원편광, 타원편광을 한 번에 포함하는 표준 표현입니다. MIT의 광자공학 강의노트는 \((E_{0x},E_{0y})\) 복소 성분으로 같은 공식을 제시하고, 실수장 \((E_x,E_y)\)의 시간·공간 변화를 통해 편광을 정의합니다. citeturn23view0

이때 경우는 세 가지로 갈립니다. \(\delta=0\) 또는 \(\pi\)이면 전기장 벡터는 항상 하나의 고정된 직선 위만 왕복하므로 선편광입니다. \(A_x=A_y\)이고 \(\delta=\pm\pi/2\)이면 끝점이 원을 그리므로 원편광입니다. 그 외의 일반적 경우는 타원편광입니다. MIT 노트는 선편광을 “고정 방향으로의 진동”, 원편광을 “고정점에서 시간에 따라 회전하는 전기장”, 타원편광을 “일반적으로 타원을 그리는 경우”로 설명합니다. citeturn6view0turn6view1turn23view0

이 표현은 질문의 핵심 직관도 곧바로 설명합니다. 고정된 시간 \(t\)에서 \(z\)에 따른 공간 분포를 보든, 고정된 위치 \(z\)에서 시간 \(t\)에 따른 운동을 보든, 모두 \(\xi=kz-\omega t+\phi_x\)라는 **같은 위상변수**를 훑는 것에 불과합니다. 그러므로 “어떤 시각에 공간축 위에 장의 영점이 있는가?”와 “어떤 점에서 시간에 따라 장이 영점을 지나가는가?”는 같은 수학입니다. MIT 교재도 이 점을 명시적으로 보여 주며, 선편광과 원편광에 대해 “fixed position에서의 시간 경과”와 “fixed time에서의 snapshot”을 서로 나란히 다룹니다. citeturn23view0

질문의 핵심인 “순간장 영점”은 다음처럼 깔끔하게 판정됩니다. \(\mathbf E=0\)이 되려면
\[
A_x\cos\xi=0,\qquad A_y\cos(\xi+\delta)=0
\]
가 동시에 성립해야 합니다. \(A_x,A_y\neq0\)이면
\[
\xi=\frac{\pi}{2}+n\pi,\qquad \xi+\delta=\frac{\pi}{2}+m\pi
\]
이므로
\[
\delta=(m-n)\pi.
\]
즉 **진정한 타원편광** \((A_xA_y\neq0,\ \delta\notin \pi\mathbb Z)\)에서는 \(\mathbf E\)가 정확히 0이 되는 위상이 존재하지 않습니다. 정확한 영점이 생기는 경우는 선편광으로 퇴화한 경우뿐입니다. 원편광은 그 특별한 하위 경우가 아니라 오히려 \(A_x=A_y,\ \delta=\pm\pi/2\)인 비퇴화 타원으로서, \(|\mathbf E|\)가 상수입니다. 이 결론은 MIT 노트의 선·원·타원편광 식에서 직접 따라옵니다. citeturn23view0

이를 직관적으로 그리면 다음과 같습니다.

```text
고정된 시각 t 에서의 +z 방향 snapshot

선편광
z:    0      λ/4     λ/2    3λ/4     λ
E:    →       0       ←       0       →

원편광
z:    0      λ/4     λ/2    3λ/4     λ
E:    →       ↑       ←       ↓       →
|E|:  일정   일정    일정    일정    일정
```

다만 여기서 아주 중요한 정규화 문제가 있습니다. “선편광과 원편광의 장 세기가 다르다”고 착시가 생기기 쉽기 때문입니다. 같은 시간평균 강도로 비교하려면
\[
\mathbf E_{\mathrm L}=E_p\hat{\mathbf x}\cos\xi,\qquad
\mathbf E_{\mathrm C}=\frac{E_p}{\sqrt2}\big(\hat{\mathbf x}\cos\xi+\hat{\mathbf y}\sin\xi\big)
\]
처럼 써야 합니다. 그러면
\[
\langle |\mathbf E_{\mathrm L}|^2\rangle=\frac{E_p^2}{2},\qquad
|\mathbf E_{\mathrm C}|^2=\frac{E_p^2}{2}
\]
가 되어 평균 강도는 같습니다. 즉 선편광은 **순간적으로 0과 최대값 사이를 오르내리고**, 원편광은 **같은 평균강도를 상수 크기로 유지**합니다. 평균강도가 같은 두 파를 비교할 때 “원편광이 어디서나 더 세다”는 말은 틀립니다. 시간평균 강도는 편광 종류가 아니라 \(A_x^2+A_y^2\)에 의해 정해집니다. MIT 교재는 시간평균 에너지밀도와 시간평균 포인팅 벡터가 오직 \(|Z|^2=A_1^2+A_2^2\)에만 의존한다고 분명히 적고 있습니다. citeturn4view1turn4view2

여기서 “확률밀도”라는 표현은 고전 전자기학에서는 보통 부적절합니다. 결정론적 단색 평면파에서는 \(\mathbf E(\mathbf r,t)\)가 이미 완전히 정해져 있으므로 확률밀도가 아니라 **장값 그 자체**가 있습니다. 확률이 들어오는 고전적 상황은 장을 랜덤 과정으로 취급하는 부분편광·불완전 코히런스의 경우인데, 그때도 확률은 순간장 \(\mathbf E\)의 “존재 여부”가 아니라 **통계적 앙상블**과 coherency matrix, Stokes 매개변수, 상관함수에 붙습니다. Wolf의 고전적 부분편광 이론은 바로 이런 맥락에서 관측가능한 매개변수와 coherency matrix를 도입합니다. citeturn21search6turn21search18

또한 “선편광에 생기는 영점”은 **완전 코히런트 단색파**라는 이상화 위에서만 정확합니다. MIT 교재는 주파수 성분과 위상이 섞인 파동에서는 편광이 시간·공간에 따라 방황하고, 단일 주파수 평면파에서만 coherence time이 무한대라고 설명합니다. 따라서 현실의 광원에서는 정확한 공간적 영점 패턴이 흐려지거나 사라질 수 있습니다. citeturn3view0

## 양자광학과 광검출

양자광학으로 넘어가면, 먼저 **고전장의 중첩**과 **단일광자 상태의 중첩**을 구별해야 합니다. MIT 8.04 노트는 \(|\text{photon};x\rangle\), \(|\text{photon};y\rangle\)를 단일광자의 두 편광 기저상태로 두고, 임의의 선형 편광 상태를
\[
|\alpha\rangle=\cos\alpha\,|x\rangle+\sin\alpha\,|y\rangle
\]
처럼 쓸 수 있음을 보입니다. 동시에 그 노트는 “전자기장의 전기장 벡터 합”과 “단일광자 상태벡터의 중첩”은 수학적으로 비슷해 보여도 물리적으로는 다른 층위라고 분명히 말합니다. 또 전역 위상은 물리적으로 무의미하므로, 편광 순수상태는 결국 두 실수 자유도로 기술됩니다. citeturn25view0

따라서 단일광자 편광은 2차원 힐베르트 공간의 qubit입니다. 흔히
\[
|H\rangle,\ |V\rangle
\]
를 선형 편광 기저로, 그것과 동등하게
\[
|D\rangle=\frac{|H\rangle+|V\rangle}{\sqrt2},\qquad
|A\rangle=\frac{|H\rangle-|V\rangle}{\sqrt2}
\]
를 \(\pm45^\circ\) 기저로, 그리고 부호 관례에 따라
\[
|R\rangle=\frac{|H\rangle+i|V\rangle}{\sqrt2},\qquad
|L\rangle=\frac{|H\rangle-i|V\rangle}{\sqrt2}
\]
를 원편광 기저로 둘 수 있습니다. 여기서 중요한 점은 **선형과 원형은 서로 다른 “종류”의 상태라기보다 같은 2차원 공간을 다른 기저로 적은 것**이라는 사실입니다. MIT 편광 노트는 원편광 상태가 회전 연산의 고유벡터가 됨을 보여 주고, 또 다른 MIT 광자공학 노트는 타원·원편광을 좌우 원편광 성분의 중첩으로 볼 수 있다고 설명합니다. citeturn4view2turn23view0

이제 양자장 연산자로 가면 핵심이 더 선명해집니다. MIT 22.51 노트는 쿨롱 게이지에서 양자화된 전자기장을
\[
\hat{\mathbf E}(t,\mathbf x)=\sum_{k,\alpha}\mathcal E_{k}\,\hat{\mathbf e}_{\alpha}(k)
\left(\hat a_{k\alpha}e^{-i(\omega_k t-\mathbf k\cdot\mathbf x)}+\hat a^\dagger_{k\alpha}e^{+i(\omega_k t-\mathbf k\cdot\mathbf x)}\right)
\]
형태로 씁니다. 여기서 \(\hat{\mathbf E}^{(+)}\)는 annihilation operator를 포함한 **양의 주파수 부분**, \(\hat{\mathbf E}^{(-)}\)는 그 에르미트 켤레입니다. 이것이 Glauber 광검출 이론의 출발점입니다. citeturn11view0turn13view1

가장 중요한 결과는, **광검출은 \(\hat{\mathbf E}\) 자체가 아니라 \(\hat{\mathbf E}^{(-)}\hat{\mathbf E}^{(+)}\)의 정상정렬 상관으로 결정된다**는 점입니다. Glauber의 노벨 강연은 점광자계수기에서 전이 진폭이
\[
\langle f|\hat E^{(+)}(\mathbf r,t)|i\rangle
\]
이고, 모든 최종상태에 대해 제곱합하면 총 검출확률이
\[
P(\mathbf r,t)\propto \langle i|\hat E^{(-)}(\mathbf r,t)\hat E^{(+)}(\mathbf r,t)|i\rangle
\]
가 된다고 유도합니다. 혼합상태라면
\[
P(\mathbf r,t)\propto \mathrm{Tr}\!\left[\rho\,\hat E^{(-)}(\mathbf r,t)\hat E^{(+)}(\mathbf r,t)\right]
\]
입니다. 이것이 1차 coherence function \(G^{(1)}\)와 직접 연결됩니다. citeturn13view1turn13view2

여기서 질문의 직관과 가장 충돌하는 사실이 나옵니다. MIT 22.51 노트는 **광자수 고유상태에서 전기장 기대값이 0**이라고 명시합니다:
\[
\langle \hat{\mathbf E}(\mathbf r,t)\rangle=0.
\]
하지만 동시에 \(\langle |\hat{\mathbf E}|^2\rangle\)는 0이 아니며, 장은 “indefinite and fluctuating”하다고 설명합니다. 반대로 coherent state에서는 \(\langle \hat{\mathbf E}\rangle\)가 고전 맥스웰 해와 같은 형태를 가집니다. 즉, 단일광자 Fock 상태에서는 선편광이든 원편광이든 **고전적인 의미의 ‘순간장 파형’ 자체를 평균값으로 읽어낼 수 없습니다**. 고전적 파형은 coherent state의 평균장에 가깝고, photon counting은 그 평균장 자체가 아니라 상관함수를 봅니다. citeturn27view0

이 점은 “단일광자의 확률밀도”라는 말이 왜 조심스러운지도 설명합니다. 광자 위치의 Born-rule형 확률밀도는 역사적으로 논쟁적이었고, 양자광학에서는 보통 **운영적 정의로서의 검출 확률 밀도**를 사용합니다. “광자 파동함수의 의미와 존재” 자체가 논쟁적이라는 점은 광자 개념을 다룬 리뷰에서도 지적됩니다. 그래서 실제 실험 예측은 \(|\psi(\mathbf r)|^2\)보다는 Glauber식 검출확률, 상관함수, 혹은 mode overlap으로 주어집니다. citeturn1search8turn13view1

이 관계를 실험 언어로 요약하면 다음과 같습니다.

```mermaid
flowchart TD
    A[광 상태 rho 또는 |psi>] --> B[양의 주파수 장 연산자 E(+)]
    B --> C[편광 분석기 없음]
    B --> D[편광 분석기 또는 위상 기준 있음]
    C --> E[광자계수기]
    D --> F[편광 투영 측정]
    D --> G[호모다인 또는 사분면 측정]
    E --> H[P_det ∝ Tr(rho E(-)E(+))]
    F --> I[P(a) ∝ |<a|psi>|^2]
    G --> J[장 사분면 및 위상 정보]
```

요점은 단순합니다. **광자계수기는 순간장의 부호나 영점을 읽지 않고, 장의 정상정렬 상관을 읽습니다.** 반대로 순간장이나 사분면을 읽으려면 국부발진기(local oscillator) 같은 위상 기준이 필요합니다. MIT 노트는 호모다인 검출이 한 장 사분면을 측정하는 방식이라고 설명합니다. citeturn12view0turn27view0

## 순간 영점이 검출 확률을 바꾸지 않는 이유

질문을 가장 직접적으로 반박 또는 정교화하는 수학은 다음입니다. 우선 **같은 평균 강도**를 갖는 두 고전파를 비교하겠습니다:
\[
\mathbf E_{\mathrm L}=E_p\hat{\mathbf x}\cos\xi,
\qquad
\mathbf E_{\mathrm C}=\frac{E_p}{\sqrt2}(\hat{\mathbf x}\cos\xi+\hat{\mathbf y}\sin\xi).
\]
그러면
\[
|\mathbf E_{\mathrm L}|^2=E_p^2\cos^2\xi,\qquad
|\mathbf E_{\mathrm C}|^2=\frac{E_p^2}{2}.
\]
선편광은 \(\xi=\pi/2+n\pi\)에서 정확한 영점을 가지지만, 원편광은 어디에서도 영점이 없습니다. 그러나 시간평균은 둘 다
\[
\langle |\mathbf E|^2\rangle=\frac{E_p^2}{2}
\]
로 동일합니다. MIT 교재가 강조하듯이 실제 광학에서는 \(\omega\)가 매우 커서 보통 시간평균 에너지밀도와 시간평균 포인팅 벡터가 중요하며, 이는 \(|Z|^2\)에만 비례합니다. citeturn4view2

일반 타원편광에 대해서도 같은 결론이 유지됩니다. 
\[
\mathbf E(\xi)=A_x\hat{\mathbf x}\cos\xi+A_y\hat{\mathbf y}\cos(\xi+\delta)
\]
라 두면,
\[
\mathbf E(\xi)=0
\]
이 성립하려면 앞 절에서 본 것처럼 \(\delta=n\pi\)가 필요합니다. 즉 **정확한 순간 영점은 타원이 직선으로 퇴화한 경우에만 생깁니다.** 따라서 “순간 영점의 존재”는 선편광의 고유한 표지이긴 하지만, 그것은 타원률(eccentricity)이 극한값이라는 기하학적 사실이지 확률 구조의 차이가 아닙니다. citeturn23view0

양자적으로는 더 결정적입니다. 한 편광 모드 \(\boldsymbol\epsilon\)에 있는 단일광자 상태를
\[
|1_{\boldsymbol\epsilon}\rangle=\hat a^\dagger_{\boldsymbol\epsilon}|0\rangle
\]
라 하고, 그 모드의 양의 주파수 장을
\[
\hat{\mathbf E}^{(+)}(\mathbf r,t)=\mathcal E_0\,\boldsymbol\epsilon\,\hat a_{\boldsymbol\epsilon}e^{i(kz-\omega t)}
\]
로 쓰면,
\[
\langle 1_{\boldsymbol\epsilon}|\hat{\mathbf E}|1_{\boldsymbol\epsilon}\rangle=0
\]
이지만
\[
P(\mathbf r,t)\propto
\langle 1_{\boldsymbol\epsilon}|
\hat{\mathbf E}^{(-)}\!\cdot\!\hat{\mathbf E}^{(+)}
|1_{\boldsymbol\epsilon}\rangle
=
|\mathcal E_0|^2\,\boldsymbol\epsilon^*\!\cdot\!\boldsymbol\epsilon
=
|\mathcal E_0|^2
\]
가 됩니다. 즉 **공간적으로 균일한 평면파 모드라면, 편광을 구분하지 않는 이상 ideal photon counter의 평균 검출율은 선편광과 원편광에서 같을 수 있습니다.** 이것은 Glauber의 검출식과 MIT 노트의 “number state에서 \(\langle\hat E\rangle=0\), coherent state에서만 평균장이 고전장처럼 보인다”는 사실을 결합하면 즉시 얻어집니다. citeturn13view1turn27view0

차이는 편광 분석을 넣는 순간 나타납니다. 분석기 방향을 \(|a\rangle\)라 하면 유효 장 연산자는
\[
\hat E_a^{(+)}\propto \langle a|\boldsymbol\epsilon\rangle\,\hat a\,e^{i(kz-\omega t)}
\]
가 되고,
\[
P_a\propto |\langle a|\psi\rangle|^2
\]
입니다. 예를 들어
\[
|R\rangle=\frac{|H\rangle+i|V\rangle}{\sqrt2}
\]
라면
\[
|\langle H|R\rangle|^2=\frac12,\qquad
|\langle V|R\rangle|^2=\frac12.
\]
그래서 원편광 단일광자는 선형 편광 분석기 앞에서 50:50으로 분배됩니다. 반대로
\[
|\langle R|R\rangle|^2=1,\qquad |\langle L|R\rangle|^2=0
\]
이므로 원편광 분석기에서는 완전히 구별됩니다. 이처럼 **검출 확률은 ‘순간 영점’이 아니라 상태와 측정기저의 내적에 의해 정해집니다.** MIT의 단일광자 편광 상태 중첩 설명과 편광 기저 전환 논의가 바로 이 구조를 뒷받침합니다. citeturn25view0turn23view0

또 한 가지 중요한 비판점이 있습니다. 질문의 논변은 무의식중에 **“같은 시간에 장이 어디서 0인가”를 정밀하게 읽을 수 있는 검출기**를 가정합니다. 그러나 표준 광자계수기와 포토다이오드는 그런 검출기가 아닙니다. Glauber의 검출이론은 광자계수 사건이 \(\hat E^{(-)}\hat E^{(+)}\)에 반응한다고 말하고, MIT 노트는 호모다인 검출처럼 국부발진기와 섞는 방식이 되어야 장 사분면을 측정할 수 있다고 설명합니다. 즉, 선편광의 순간 영점은 **표준 photon counting의 직접 관측량이 아니며**, 관측하려면 위상 기준이 있는 별도의 측정 스킴이 필요합니다. citeturn13view1turn12view0

## 기하학적 관점과 불변량

편광을 가장 깔끔하게 이해하는 방법은 “선편광 대 원편광”을 본질적 이분법으로 보지 않고, **하나의 2차원 상태공간 위의 서로 다른 좌표계**로 보는 것입니다. Jones 벡터 관점에서
\[
J=\begin{pmatrix}\alpha\\ \beta\end{pmatrix},\qquad
|\alpha|^2+|\beta|^2=1
\]
라 두면, 전역 위상을 제외한 두 실수 자유도만 남습니다. MIT의 단일광자 상태 노트도 광자 편광상태에 정확히 두 자유도가 있음을 강조하며, 이는 고전 타원편광의 두 실수 매개변수와 대응합니다. citeturn25view0

Stokes 매개변수는 이 상태를 기저 불변적이고 실험친화적인 방식으로 표현합니다. MIT 안테나/신호 노트는 좁은 대역 평면파에 대해 \(S_0,S_1,S_2,S_3\)를 총강도, \(x/y\) 비대칭, \(\pm45^\circ\) 비대칭, 원편광 비대칭으로 정의하고, 완전편광이면
\[
S_0^2=S_1^2+S_2^2+S_3^2
\]
가 성립한다고 적습니다. Thorlabs의 설명도 정규화된 \((S_1,S_2,S_3)\)가 Poincaré 구면의 직교좌표가 된다고 요약합니다. citeturn24view0turn19search3

이 그림에서 선편광 상태들은 적도 \((S_3=0)\) 위에 놓이고, 좌·우 원편광은 두 극점 \((|S_3|=S_0)\)에 놓입니다. 타원편광은 그 사이의 점들입니다. 그러므로 “선편광에는 순간 영점이 있고 원편광은 그렇지 않다”는 사실은 Poincaré 구면에서는 “적도와 극점이 다른 점들”이라는 사실의 한 표현일 뿐입니다. 더 근본적인 것은 **상태공간의 기하학**이며, 어느 기저가 더 본질적이라고 말하기는 어렵습니다. 다만 회전대칭을 볼 때는 원편광이 더 자연스러운 좌표입니다. citeturn19search3turn24view0

이 점을 MIT 8.03 노트가 아주 명확하게 보여 줍니다. 진행방향 \(\hat{\mathbf k}\) 주위에서 각 \(\theta\)만큼 회전시키는 연산 \(R_\theta\)는 선편광 기저에서는 일반 회전행렬로 작용하지만, 좌·우 원편광 상태에는
\[
R_\theta|L\rangle=e^{-i\theta}|L\rangle,\qquad
R_\theta|R\rangle=e^{+i\theta}|R\rangle
\]
처럼 단순히 위상인자만 곱합니다. 즉 원편광은 회전의 고유상태이며, 이것이 광자의 helicity 및 spin과 연결됩니다. 이 의미에서 원편광은 “회전 대칭에 대해 자연스러운 기저”이지, 선편광보다 더 실재적이거나 더 근본적이라는 뜻은 아닙니다. citeturn4view2

편광과 코히런스도 분리해서 봐야 합니다. 진동수 하나의 완전한 평면파에서는 coherence time이 무한대라서 선편광의 공간 영점과 원편광의 상수 크기가 정확합니다. 그러나 부분코히런트 장에서는 coherency matrix가 근본량이 되고, Stokes 벡터와 degree of polarization이 관측량이 됩니다. Wolf의 고전적 coherence 이론이 바로 이 틀을 제공했습니다. citeturn3view0turn21search6turn21search18

다음을 하나의 기하학 도식으로 볼 수 있습니다.

```text
Poincaré 구면 개념도

           L 또는 R  (부호 관례에 따라 극점 배치 바뀔 수 있음)
                    ●
                 ／ | ＼
              ／    |    ＼
           타원     |     타원
            편광    |      편광
         ●---------●---------●
        H/V      D/A       기타 선편광
      (적도 위 모든 점이 선편광, S3 = 0)
                    ●
           R 또는 L
```

여기서 부호 관례는 분야에 따라 다를 수 있습니다. MIT 안테나 노트는 공학과 물리학이 원편광의 handedness를 반대로 쓰는 경우가 있음을 분명히 지적합니다. 따라서 중요한 것은 이름표보다 **상태벡터와 측정 정의**입니다. citeturn24view0turn23view0

## 실험적으로 무엇이 구별되는가

실험에서 편광을 구별하는 가장 기본적인 장치는 **편광판과 위상지연판**입니다. MIT 8.03 노트는 선형 편광판이 특정 축 성분만 통과시키고 직교 성분을 흡수한다고 설명하며, quarter-wave plate와 polarizer 조합으로 원편광을 만들고 분석할 수 있음을 구체적으로 보여 줍니다. 즉 선편광과 원편광의 차이는 “순간 영점의 유무”를 직접 보는 대신, **어떤 분석 광학계를 통과한 뒤 어떤 출력이 나오는가**로 판별됩니다. citeturn3view0turn5view1

예를 들어 선형 편광 \(|H\rangle\)는 \(H/V\) 분석기에서는 한 포트로만 나오지만, 원편광 \(|R\rangle\)는 \(H/V\) 분석기에서는 두 포트에 반반으로 나옵니다. 반대로 \(R/L\) 분석기에서는 \(|R\rangle\)가 한 포트에만 나옵니다. 따라서 “어떤 측정에서 잘 구별되느냐”는 상태 자체보다 **측정기저 선택**에 달려 있습니다. 이 사실은 Stokes 측정 공식을 통해서도 드러납니다. \(S_1\)은 \(H/V\), \(S_2\)는 \(D/A\), \(S_3\)는 \(R/L\) 기저의 비대칭을 측정하기 때문입니다. citeturn24view0

간섭 측정은 또 다른 층위를 보여 줍니다. 표준 photon counting은 \(G^{(1)}\) 또는 \(G^{(2)}\)에 반응하므로 순간장 부호를 직접 측정하지 못하지만, 호모다인 검출은 국부발진기를 섞어서 필드의 사분면을 측정합니다. 따라서 “순간 영점”을 말하려면 사실상 **위상 참조가 있는 장 측정**을 염두에 두어야 합니다. 반대로 일반 포토다이오드나 단일광자계수기에서는 평균 검출율만으로는 같은 공간모드·같은 스펙트럼의 선편광 단일광자와 원편광 단일광자를 구분하지 못할 수 있습니다. 구분하려면 편광 분석기를 추가해야 합니다. citeturn12view0turn13view1turn27view0

양자상태 토모그래피는 이를 가장 일반적으로 수행합니다. 최근의 광자 토모그래피 연구는 단일광자의 편광 자유도에 대해 여러 기저에서의 투영 측정을 조합하여 밀도행렬을 재구성합니다. 편광과 경로 자유도를 함께 가진 단일광자 상태도 이런 방식으로 완전 재구성이 가능하다고 2023년 arXiv 논문이 설명합니다. 단일광자의 토모그래피는 결국 \(H/V\), \(D/A\), \(R/L\) 같은 서로 다른 기저에서의 측정 확률을 모아 Stokes 벡터나 밀도행렬을 추정하는 절차입니다. citeturn26search13turn24view0

실험 관점에서 질문을 압축하면 다음 표와 같습니다. 이 표는 앞 절의 유도와 광검출 이론을 요약한 것입니다. citeturn23view0turn4view2turn13view1turn27view0turn24view0

| 항목 | 선편광 | 원편광 | 일반 타원편광 |
|---|---|---|---|
| 고전장 표현 | \(\mathbf E=E_p\hat{\mathbf u}\cos\xi\) | \(\mathbf E=A(\hat x\cos\xi\pm \hat y\sin\xi)\) | \(\mathbf E=A_x\hat x\cos\xi+A_y\hat y\cos(\xi+\delta)\) |
| 고정된 \(t\)에서의 공간 분포 | \(z\)에 따라 영점 존재 | \(|\mathbf E|\) 일정, 방향만 회전 | 보통 \(|\mathbf E|\) 변하지만 정확한 영점은 없음 |
| 고정된 \(z\)에서의 시간 운동 | 한 직선 위 왕복 | 원운동 | 타원운동 |
| 순간 에너지 밀도 | \(\propto \cos^2\xi\) | 상수 | 일반적으로 위상에 따라 변함 |
| 시간평균 강도 | \(A_x^2+A_y^2\)에만 의존 | 동일 | 동일 |
| 단일광자 Fock 상태의 \(\langle \hat E\rangle\) | 0 | 0 | 0 |
| 편광 미분석 광검출 | 같은 공간모드라면 같은 평균율 가능 | 같음 | 같음 |
| 편광 분석 후 광검출 | 기저 투영에 따라 달라짐 | 기저 투영에 따라 달라짐 | 기저 투영에 따라 달라짐 |
| 상태공간 표현 | Poincaré 적도 | Poincaré 극점 | 구면 일반점 |
| 대표 측정기 | 선형 편광판 | QWP+PBS 또는 원편광 분석기 | Stokes 측정, 토모그래피 |

핵심은 이것입니다. **실험이 실제로 측정하는 것은 장의 “순간 영점”이 아니라, 장의 제곱, 상관함수, 또는 기저에 대한 투영확률**입니다. 따라서 질문의 직관은 고전 정현파의 한 “스냅샷 그림”으로는 맞지만, 그것을 곧바로 검출 확률이나 확률밀도 차이로 동일시하면 물리적으로 한 단계 건너뛴 셈입니다. citeturn13view1turn12view0

## 간결한 결론

엄밀하게 말하면, **선편광과 원편광은 구별 가능한 서로 다른 편광 상태**입니다. 그러나 그 구별의 본질은 “선편광에는 어떤 시각에 공간적으로 \(\mathbf E=0\)인 점이 있고, 원편광은 없다”는 사실 자체가 아닙니다. 그 차이는 고전 단색 평면파의 순간장 스냅샷에서는 분명히 보이지만, 그것은 **확률밀도**가 아니라 **장 위상과 편광 타원 기하**의 차이입니다. 시간평균 강도는 같은 \(|Z|^2\)라면 동일하고, 일반 광검출도 그 평균적 상관량에 반응합니다. citeturn4view2turn21search6

양자광학에서는 이 결론이 더 강해집니다. 단일광자 Fock 상태에 대해 선편광과 원편광 모두 \(\langle \hat E\rangle=0\)이고, 검출확률은 Glauber식 \(\langle \hat E^{(-)}\hat E^{(+)}\rangle\)로 주어집니다. 따라서 **순간장 영점은 단일광자 검출확률을 직접 결정하지 않습니다**. 편광 차이는 analyzer, waveplate, interference, tomography처럼 적절한 측정기저를 선택했을 때 투영확률과 상관함수의 차이로 나타납니다. citeturn13view1turn27view0turn26search13

가장 압축된 판정은 다음 한 문장입니다. **선편광과 원편광은 서로 다른 상태이지만, 그 차이를 “순간장 영점 대 비영점”이라는 그림 하나로 본질화하면 안 되고, 고전에서는 Stokes/강도/에너지밀도, 양자에서는 \(G^{(1)}\), 투영확률, 토모그래피 같은 실제 관측량으로 다시 표현해야 한다**는 것입니다. citeturn24view0turn13view2

## 주된 일차 및 표준 참고문헌

이 주제의 일차 문헌으로는 Roy Glauber의 1963년 광학 coherence 이론 및 노벨 강연, Ugo Fano의 1954년 양자역학적 Stokes 기법, Emil Wolf의 1959년 부분편광 coherence 이론이 가장 직접적입니다. 표준 교과서 계열로는 Jackson의 *Classical Electrodynamics*, Born과 Wolf의 *Principles of Optics*, Loudon의 *The Quantum Theory of Light*가 여전히 핵심 참조문헌입니다. 본 보고서의 기술적 서술은 이 계보를 따르는 MIT·UT Austin 강의노트와 Glauber 관련 1차 자료를 우선하여 구성했습니다. citeturn15search14turn15search24turn15search7turn20search0turn20search1turn21search0turn22search5turn22search11turn22search2
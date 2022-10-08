# Dokumentation

## Tech-stack

### Grundlæggende Tech

- **HTML (HyperText Markup Language)**
- **CSS (Cascading Style Sheets)**
- **Javascript**

### Core Frameworks

- **Tailwind CSS** - _Et utility-first css framework, som gør det hurtigt at lave meget styling_

  > **Tailwind CSS** er et css framework, der leverer en masse "out-of-the-box" classes med prædefineret styling. Tailwind giver også mulighed for at angive custom utility classes i deres konfiguration, så det er nemt at adaptere en styleguide. Derudover er Tailwind super lightweight, og kan tilpasses langt mere I forhold til fx. Boostrap.

- **Vitest**
  > **Vitest** er et testing framework lavet specifikt til Vite projekter. Til sammenligning med andre testing frameworks som Jest, og Cypress, er vite nemmere og lettere at starte på. Der er bl.a. mindre konfiguration, og er generelt en mere moderne tilgang til unit testing i JavaScript.

```html
<div className="p-4 bg-gray-600 text-white"></div>
```

\- Eksempel på Tailwind utility classes

### Core libraries

- **React.js** - _Et Javascript bibliotek som gør det lettere og hurtigere at bygge user interfaces_
  > React er et bibliotek som hjælper enormt meget på effektivitet, og genbruglighed når til kommer til udvikling af web. Ift. andre populære valg som Vue.js og Angular, er der ikke den store forskel på hvad de individuele værktøjer kan tilbyde "out-of-the-box", dog er det ikke helt uden grund at React er det mest populære valg. Det er langt det største JavaScript værktøj til webudvkling, og har et kæmpe fællesskab - Det vil sige at det er altid let at finde svar på alle udfordringer man kan støde på, og så der er flere plugins udviklet specifikt til React.

### Core packets

- **Axios** - _Et alternativ til fetch API'et_
  > **Axios** tilbyder mere funktionalitet, en simplere og mere effektiv syntax, har bedre browser kompatibilitet, og gør det nemt, og hurtigere at lave HTTP requests, i forhold til fx. Fetch API'et, som har en lang syntax og har unødvendige method chaining til fx. formattering af data.
- **Yup** - _Simpel schema builder til værdi parsing og validering_
  > **Yup** er en schema-builder, som tilbyder et bredt og kortfattet object interface med simple prædefineret regler, samt muligheden for at bygge kompliceret validering, indebygget async validering, med en simpel syntax, som er let at forstå og skrive. Yup er en hurtig og simpel løsning, til et ellers besværligt problem.
- **React Hook Form** - _Form validering med god performance_
  > **React Hook Form** formindsker mængden af kode nødvendig for en sikker og effektiv løsning til form validering. Med React Hook Form, I forhold til fx. Formik, har det færre dependencies, og laver færre rerenders, hvilket gør din app hurtigere og giver brugeren en bedre "user-experience".
- **Fuse.js** - _Et hurtigt og simpelt fuzzy search bibliotek_
  > **Fuse.js** er et kraftfuld men lightweight fuzzy-search bibliotek, som giver mulighed for at implementere "approximate string matching" i fx. filtrering en søge funktion, et ellers svært emne at tilgå, hvis man skulle lave det fra bunden.
- **React Router Dom** - _Et lightweight, routing bibliotek_
  > **React Router** er et kæmpe bibliotek som giver en masse muligheder for at lave routing i en React app, og er klart det mest populære valg til routing. React Router DOM er React Router versionen til DOM'en. Det gør single-page applications nemt at udvikle, det stiller en masse komponenter og hooks til rådighed.
- **Toastify** - _Et lille notifikation bibliotek_
  > Toastify er et lille bibliotek som gør det nemt at integrere notifikationer i ens web app, samt giver en god bruger-oplevelse.
- [**Testing Library**](#testing)
- [**React Cookie**](#cookies)

## Process

### Kanban - (Linear)

For at skrukturere mit project, og for at holde overblik, har jeg gjort brug af kanban metoden, via. Linear, som er et program som gør brug af et "board", og integereres nemt med Github vha. webhooks. Det fungerer sådan at boardet er sat op i kolonner - (backlog, todo, in progress, done). Kolonner bliver løbende fyldt af **"issues/tasks"**, for at holde overblik over de ting der skal laves.

![Linear Screenshot 01](materials/markdown/linear_01.png)
\- Eksempel på Linear **issue**

Når du har lavet din issue, og skal igang med at arbejde på den, kan man kopiere git branch navnet (som er en slags "_slug_" for issuet), og lave en branch i navnet, den vil derefter blive forbundet til Linear, så at issuet følger med processen af branchen.<br/>Todo - In progress (PR) - Done (Merged).

![Linear Screenshot 01](materials/markdown/linear_02.png)
\- Eksempel på Linear branch interaktion

`oliverrindholt/sve-12-drink-water`

`git checkout -b oliverrindholt/sve-12-drink-water`

### Git - (Github)

> Git gør organisering af projekter kode mere effektivt, og gør det nemt at kigge tilbage på tidligere arbejde. Det stiller en masse commands til rådighed, som giver mig mulighed for at holde styr på mit kode, og sørge for at der ikke er nogen konflikter mellem branches. Github er platformen som jeg kommunikerer med under udvikling, og som er integreret med Netlify.

`git add .`

`git commit -m "message"`

`git push`

### API Testing - Insomnia

> **Insomnia** gør det nemt at teste http requests uden fetch/axios i browseren. Så jeg ved hvad jeg kan forvente af et request, og hvad jeg skal sende med i JSON og headers, før jeg bruger tid på at implementere det i app'en.
>
> ![Insomnia Screenshot 01](materials/markdown/insomnia_01.png) > \- Eksempel på Insomnia

## Udvalgt kode til vudering

```js
const useFetch = ({
	endpoint = "/api/v1/",
	method = "GET",
	authToken = "",
	fetchOnInit = true,
}) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const callFetch = async (body = {}) => {
		setIsLoading(true);
		return axios({
			url: `${apiUrl}${endpoint}`,
			method,
			data: body,
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		})
			.then(res => {
				setData(res.data);
				setError(null);
				setIsLoading(false);
				return { ...res, error: false };
			})
			.catch(err => {
				setData(null);
				setError(err);
				setIsLoading(false);
				return { ...err, error: true };
			});
	};

	useEffect(() => {
		if (fetchOnInit && !error) {
			callFetch();
		}
	}, [endpoint, method]);

	return { data, error, isLoading, callFetch };
};
```

```js
const {
	callFetch: attemptLogin,
	isLoading,
	error,
} = useFetch({
	endpoint: "/auth/token",
	fetchOnInit: false,
	method: "post",
});
```

```js
const loginResponse = await attemptLogin({ username, password });
```

## Overvejelser

- Hvorfor vite over cra?
  > Jeg har valgt at bruge vite som min bundler, fremfor webpack som kommer med create-react-app. Det har jeg bl.a. gjort fordi at Vite er hurtigere til at levere mit Javascript i browseren i development, det vil sige at når jeg laver en ændring, kan jeg meget hurtigt se mine opdateringer. det er det også langt hurtigere i opstart af projektet, samt kreation af projektet.

## Forbedringer

### Skalering

- Fordele med React?
  > Når man snakker om skalering, er React er brilliant bibilotek. Det har jeg gjort fordi det bl.a. har god reusablility i form af components, som kan blive genbrugt og nemt refactoret hvis nødvendigt.
- Mere unit testing
- Søge debouncing
- Data caching / PWA
  > Når man udvikler web apps, er implementationen af PWA (Progressive Web App), et must-have, da det giver adgang til en masse muligheder for sin app. Det giver bl.a. integeret data caching, evne til brug af app uden tilgang til internet, og meget mere.
- Animationer
- Bedre accessibility
- Tilføj kommentare

## Ekstra Opgaver

Jeg har valgt at lave:

<section id="deployment">

### Ekstra opagve A - Automatiseret deployment

Netlify - _Forbundet til Github således at når man pusher til det forbundet repo, bygger den din kode for dig, og fanger alle fejl du kunne have misset._

[Deployment](https://landrup-dans-orindholt.netlify.app/)

</section>

<section id="testing">

### Ekstra opagve B - Tests

Vitest & Testing Library

> Til unit testing har jeg valgt at bruge vitest som er et testing tool beregnet til projekter der kører på Vite, og React Testing Library som er et testing library, som tilføjer integrationen af React components i testing.

[Test fil](src\test\Activity.test.jsx)

</section>

<section id="cookies">

### Ekstra opagve C - Cookies

React Cookie

> Til min integration af cookies har jeg brugt **react-cookie** som stiller et hook til rådighed, som hjælper med at tilføje, fjerne, og tilgå cookies i en React app.

```js
const [cookies, setCookie, removeCookie] = useCookies(["user-data"]);
```

```js
if (rememberMe) {
	setCookie("user-data", loginResponse.data, {
		path: "/",
		expires: new Date(loginResponse.data.validUntil),
		sameSite: "lax",
	});
} else if (cookies["user-data"]) removeCookie("user-data");
```

\- Eksempel på cookie integration med **_"useCookies"_** i [Login.jsx](src\pages\Login.jsx)</section>

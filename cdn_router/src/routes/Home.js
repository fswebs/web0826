function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`
            )
        ).json();

        // const response = await fetch(
        //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
        // );
        // const json = await response.json();

        setMovies(json.data.movies);
        setLoading(false);

        // .then((response) => response.json())
        // .then((json) => {
        //     setMovies(json.data.movies);
        //     setLoading(false);
        // });
    };

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);
    return (
        <div className={styles.container}>
            {loading ? (
                <h1>로딩 중...</h1>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        // Movie({id:movie})
                        <Movie
                            //key는 ReactJS에서만 map안에서 component들을 render할 때 사용한다.
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary ={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
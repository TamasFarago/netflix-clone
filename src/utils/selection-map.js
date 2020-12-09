export default function selectionFilter({series, films}) {
    return {
        series: [
            { title: "Documentaries", data: series.filter((item) => item.genre === "documentaries")},
            { title: "Comedies", data: series.filter((item) => item.genre === "Comedies")},
            { title: "Children", data: series.filter((item) => item.genre === "Children")},
            { title: "Crime", data: series.filter((item) => item.genre === "Crime")},
            { title: "Feel Good", data: series.filter((item) => item.genre === "feel-good")}
        ],
        films: [
            { title: "Drama", data: films.filter((item) => item.genre === "Drama")},
            { title: "Thriller", data: films.filter((item) => item.genre === "Thriller")},
            { title: "Children", data: films.filter((item) => item.genre === "Children")},
            { title: "Suspense", data: films.filter((item) => item.genre === "Suspense")},
            { title: "Romance", data: films.filter((item) => item.genre === "Romance")}
        ]
    }
}
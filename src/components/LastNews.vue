<template>
    <section class="lastNews">
        <div class="lastNews-headerApp">
            <h2 class="lastNews-header">
                latest news
            </h2>
            <div class="lastNews-linkApp">
                <a class="lastNews-link">View all news</a>
            </div>
        </div>
        <div class="lastNews-news">
            <div class="lastNews-newsApp">
                <p class="lastNews-news__text">
                    In the news
                </p>
                <h3 class="lastNews-news__heading">
                    moving into product leadership? here are the trends
                    you should be watching.
                </h3>
                <a class="lastNews-news__link">read more</a>
            </div>
        </div>
        <div class="lastNews-news">
            <div class="lastNews-newsApp">
                <p class="lastNews-news__text">
                    In the news
                </p>
                <h3 class="lastNews-news__heading">
                    13 tech leaders share their favorite sources
                    of leadership lessons
                </h3>
                <a class="lastNews-news__link">read more</a>
            </div>
        </div>
        <div class="lastNews-news">
            <div class="lastNews-newsApp">
                <p class="lastNews-news__text">
                    In the news
                </p>
                <h3 class="lastNews-news__heading">
                    what fuels you - david glick
                </h3>
                <a class="lastNews-news__link">read more</a>
            </div>
        </div>
        <div class="lastNews-news">
            <div class="lastNews-newsApp">
                <p class="lastNews-news__text">
                    In the news
                </p>
                <h3 class="lastNews-news__heading">
                    flexing your wsrehouse pace before it's
                    too late - at your doorstep
                </h3>
                <a class="lastNews-news__link">read more</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.lastNews {
    height: 100%;
    width: 100%;
    background: cornsilk;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    &-headerApp {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 3rem;
    }

    &-header {
        text-transform: capitalize;
        font-size: 2em;
    }

    &-link {
        border-bottom: dotted black 1.5px;
        &:hover {
            border-bottom: solid gold 1.5px;
            color: gold;
            cursor: pointer;
        }
    }

    &-newsApp {
        margin: 1rem;
    }

    &-news {
        height: 15rem;
        width: 40%;
        border-left: solid black 1.5px;
        margin-bottom: 2rem;
        &:hover {
            color: gold;
            border-left: solid gold 1.5px;
            cursor: pointer;
        }
        &__text {
            margin-bottom: 1rem;
        }

        &__heading {
            font-size: 1.5em;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }
    }
}
</style>

<script>
export default {
  name: 'LastNews',
};
</script>

<template>
    <section class="video">
        <div class="video-app">
            <video class="video-clip" src="../assets/video/video.mp4" autoplay="autoplay"
            loop="loop">
                <!-- <source src="../assets/video/video.mp4" type="video/mp4"> -->
            </video>
            <div class="video-content">
                <h2 class="video-content__text">
                    Omnichannel Logistics. Powered by Flexe.
                </h2>
                <div class="video-content__buttonApp">
                    <button class="video-content__button">
                        our approach
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.video {
    height: 100%;
    width: 100%;
    &-clip {
        height: auto;
        width: 100%;
    }

    &-app {
        position: relative;
    }
    &-content {
        position: absolute;
        top: 15rem;
        width: 100%;
        background: rgba(0, 0, 0, 0);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__text {
            width: 80vw;
            text-align: center;
            font-size: 3.6rem;
            background: rgba(0, 0, 0, 0);
            color: #ffffff;
            animation-duration: 3s;
            animation-name: slidein;
        }

        &__buttonApp {
            width: 100%;
            text-align: center;
            background: rgba(0, 0, 0, 0);
        }

        &__button {
            background: #B8860B;
            margin: 3rem auto;
            border: none;
            border-radius: 50px;
            height: 2rem;
            width: 8rem;
            text-transform: capitalize;
            &:hover {
                background: #D2691E;
                cursor: pointer;
            }
            &:active {
                transform: rotate(0.2turn);
            }
        }
    }
}
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

@media only screen and (min-width: 640px) and (max-width: 1023px) {
    .video-content {
        top: 12rem;
        &__text {
            font-size: 2.3rem;
        }
    }
}

@media only screen and (min-width: 480px) and (max-width: 640px) {
    .video-content {
        top: 8rem;
        &__text {
            font-size: 1.6rem;
        }
    }
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
    .video-content {
        top: 5rem;
        &__text {
            font-size: 1.3rem;
        }
    }
}
</style>

<script>

export default {
  name: 'Video',
};
</script>

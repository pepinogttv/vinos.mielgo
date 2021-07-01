<template>
  <div class="contact_phone" id="contact_phone">
    <i class="fa fa-phone faa-ring animated"></i>&nbsp;
    <a href="tel: +542352430049">+54 2352 430049</a>
  </div>
</template>

<script>
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
export default {
  data() {
    return {
      lastScroll: 0,
    };
  },
  mounted() {
    // window.addEventListener("scroll", this.fixedAndHidde());
  },
  methods: {
    fixedAndHidde() {
      const contact_phone = this.$refs.contact_phone;
      return () => {
          const currentScroll = window.pageYOffset;
          if (currentScroll > this.lastScroll) {
            contact_phone.classList.remove(scrollUp);
            contact_phone.classList.add(scrollDown);
          } else if (currentScroll < this.lastScroll) {
            contact_phone.classList.remove(scrollDown);
            contact_phone.classList.add(scrollUp);
          }
          this.lastScroll = currentScroll;
      };
    },
  },
};
</script>

<style>
.contact_phone {
  position: fixed;
  width: 100%;
  max-width: 1425px;
  padding: 0.5rem;
  color: white;
  background-color: var(--verde-wsp);
  text-align: center;
  letter-spacing: 1px;
  font-size: 1.1rem;
  transition: transform 0.4s;
  z-index: 100;
}
.scroll-up {
  transform: none;
}
.scroll-down {
  transform: translate3d(0, -100%, 0);
}
.faa-ring.animated,
.faa-ring.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-ring {
  -webkit-animation: ring 2s ease infinite;
  animation: ring 2s ease infinite;
}
@-webkit-keyframes ring {
  0% {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  2% {
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  4% {
    -webkit-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  6% {
    -webkit-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  8% {
    -webkit-transform: rotate(-22deg);
    transform: rotate(-22deg);
  }

  10% {
    -webkit-transform: rotate(22deg);
    transform: rotate(22deg);
  }

  12% {
    -webkit-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  14% {
    -webkit-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  16% {
    -webkit-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }

  18% {
    -webkit-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  20% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes ring {
  0% {
    -webkit-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  2% {
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  4% {
    -webkit-transform: rotate(-18deg);
    -ms-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  6% {
    -webkit-transform: rotate(18deg);
    -ms-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  8% {
    -webkit-transform: rotate(-22deg);
    -ms-transform: rotate(-22deg);
    transform: rotate(-22deg);
  }

  10% {
    -webkit-transform: rotate(22deg);
    -ms-transform: rotate(22deg);
    transform: rotate(22deg);
  }

  12% {
    -webkit-transform: rotate(-18deg);
    -ms-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  14% {
    -webkit-transform: rotate(18deg);
    -ms-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  16% {
    -webkit-transform: rotate(-12deg);
    -ms-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }

  18% {
    -webkit-transform: rotate(12deg);
    -ms-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  20% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>

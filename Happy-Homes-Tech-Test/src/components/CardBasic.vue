<template>
      <!-- Apple iPhone 11 Pro -->
      <v-col  sm="3" cols="12">
        <v-card class="d-flex align-center">
          <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-column">
            <div class="mx-auto">
              <v-img
                width="220"
                height="100%"
                :src="product.thumbnail"
              ></v-img>
            </div>
            <v-divider :vertical="$vuetify.breakpoint.mdAndUp"></v-divider>
            <div>
              <v-card-title>
                {{product.title}}
              </v-card-title>
              <v-card-text>
               {{product.description}}
              </v-card-text>
              <v-card-text class="text--primary text-base">
                <span>Price :</span> <span class="font-weight-bold">${{product.price}}</span>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between dense">
                <v-btn
                  text
                  color="primary"
                  dark
                >
                  <v-icon>{{ icons.mdiCartPlus }}</v-icon>
                  <span class="ms-2">Add to cart</span>
                </v-btn>
                <v-btn icon>
                  <v-icon>{{ icons.mdiShareVariantOutline }}</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
     
  

</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiCartPlus,
  mdiShareVariantOutline,
  mdiLockOpenOutline,
  mdiStarOutline,
  mdiAccountOutline,
  mdiTrendingUp,
  mdiHelpCircleOutline,
} from '@mdi/js'

export default {
  props: ['product'],
  setup() {
    const isCardDetailsVisible = false
    const rating = ref(5)

    return {
      isCardDetailsVisible,
      rating,

      // icons
      icons: {
        mdiChevronUp,
        mdiChevronDown,
        mdiCartPlus,
        mdiShareVariantOutline,
        mdiLockOpenOutline,
        mdiStarOutline,
        mdiAccountOutline,
        mdiTrendingUp,
        mdiHelpCircleOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/plugins/vuetify/default-preset/preset/mixins.scss';

.avatar-center {
  top: -2rem;
  left: 1rem;
  border: 3px solid white;
  position: absolute;
}

// membership pricing
@include theme--child(memberpricing-bg) using ($material) {
  background-color: rgba(map-deep-get($material, 'primary-shade'), map-deep-get($material, 'states', 'hover'));
}

.memberpricing-bg {
  position: relative;
}
.membership-pricing {
  text-align: center;
  sup {
    font-size: 3.75rem;
    top: 9px;
  }
}
</style>

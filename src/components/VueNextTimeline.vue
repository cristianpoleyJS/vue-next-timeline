<template>
  <section class="vue-next-timeline" v-if="items && items.length">
    <ul class="vue-next-timeline__list-items" :class="{
      'horizontal': horizontal
    }">
      <li v-for="(item, ix) in items" :key="item[itemUniqueKey] || ix" :class="{'li-last': ix === items.length - 1, 'even': ix % 2 === 0, 'odd': ix % 2 !== 0}" :style="{'--color': colorItem(item)}">
        <span class="vue-next-timeline__list-items__line" />
        <summary class="vue-next-timeline__list-items__summary">
          <slot name="title">
            <span class="vue-next-timeline__list-items__summary--title" v-if="itemTitle(item)" :style="{'--color': colorItem(item)}">
                {{ itemTitle(item) }}
            </span>
          </slot>
          <slot name="content">
            <span class="vue-next-timeline__list-items__summary--content" v-if="itemContent(item)">
                {{ itemContent(item) }}
            </span>
          </slot>
        </summary>
        <slot name="line-title">
          {{ itemLineText(item) }}
        </slot>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'VueNextTimeline',
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    itemUniqueKey: {
      type: String,
      default: ''
    },
    itemTitleKey: {
      type: String,
      default: 'title'
    },
    itemContentKey: {
      type: String,
      default: 'content'
    },
    itemLineTextKey: {
      type: String,
      default: 'lineText'
    },
    itemClickable: {
      type: [String, Boolean],
      default: true
    },
    textAlign: {
      type: String,
      default: 'center',
      validator: (value) => {
        return ['left', 'center', 'right'].indexOf(value) !== -1
      }
    },
    className: {
      type: String,
      default: ''
    },
    contentClass: {
      type: String,
      default: ''
    },
    contentSubstr: {
      type: Number,
      default: 250
    }
  },
  data () {
    return {
      itemSelected: {}
    }
  },
  methods: {

    itemTitle (item) {
      return item[this.itemTitleKey]
    },

    itemContent (item) {
      return item[this.itemContentKey]
    },

    itemLineText (item) {
      return item[this.itemLineTextKey]
    },

    colorItem (item) {
      return item.color || '#1e2124'
    }
  }
}
</script>

<style scoped lang="scss">
  .vue-next-timeline {

    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    &__list-items {
      list-style: none;
      display: flex;
      padding: 0;

      > li {
        position: relative;

        .vue-next-timeline__list-items__line {
          background-color: var(--color);
          width: 1px;
          height: 60px;
          display: block;
          position: absolute;
          left: 50%;
          &:before,
          &:after {
            content: '';
            background-color: var(--color);
            display: block;
            position: absolute;
            border-radius: 100%;
            outline: 2px solid #fff;
          }
        }

        &.even {
          border-bottom: 1px solid #2c3e50;
          padding-bottom: 90px;

          .vue-next-timeline__list-items__summary--title {
            display: table-footer-group;
          }
          .vue-next-timeline__list-items__summary--content {
            display: table-header-group;
          }
          .vue-next-timeline__list-items__line {
            bottom: 0;
            &:before {
              content: '';
              width: 24px;
              height: 24px;
              top: -22px;
              left: -11px;
            }
            &:after {
              content: '';
              width: 10px;
              height: 10px;
              bottom: -7px;
              left: -4px;
            }
          }
        }
        &.odd {
          transform: translateY(100%);
          border-top: 1px solid #2c3e50;
          margin-bottom: 1px;
          padding-top: 90px;

          .vue-next-timeline__list-items__line {
            top: 0;
            &:before {
              content: '';
              width: 10px;
              height: 10px;
              top: -6px;
              left: -4px;
            }
            &:after {
              content: '';
              width: 24px;
              height: 24px;
              bottom: -22px;
              left: -11px;
            }
          }
        }
      }

      &__summary {
        display: table;

        &--title {
          font-weight: 500;
          color: var(--color);
          display: block;
          font-size: 1rem;
          margin-top: 8px;
          line-height: 22px;
        }
        &--content {
          font-size: 14px;
          line-height: 20px;
          color: #848484;
        }

      }
    }
  }
</style>

<template>
  <v-container>
    <!-- <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row> -->

    <!-- <v-row>
      <v-btn color="secondary" x-large></v-btn>
    </v-row> -->

  <v-row class="justify-center text-center mb-5">
    <v-btn v-for="(types) in type" :key="types.name" class=" my-3 mx-2 "  @click="fileter(types)" :class="{'blue-grey darken-1':!types.clicked,'green darken-1':types.clicked}">
          {{types.name}}
    </v-btn>
  </v-row>


    <v-row class="justify-center text-center">
      <div class="d-flex flex-wrap justify-start" style="width:95%;">
        <v-btn v-for="(item,i) in filter_result" :key="i" class="box my-3 mx-2 text-lowercase" color='info' @click='audio(item)'>
          {{item.name}}<br>
          {{item.pinyin}}
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>


<style lang="scss">
  .box{
    width: calc(10% - 16px);
    height: 120px !important;
    border: 1px solid black;
    font-size: 30px !important;
    line-height: 120px;
    background-color:aqua;
  }
</style>


<script>
  export default {
    name: 'HelloWorld',
    components:{
    },
    data: () => ({
      type:[{
              name:'All',
              clicked:false,
            },
            {
              name:'Consonant',
              clicked:false,
            },
            {
              name:'HeadVowel',
              clicked:false,
            },
            {
              name:'Vowel',
              clicked:false,
            },
          ],
      test:[{
              id:0,
              name:'ㄅ',
              pinyin:'[b]',
              audio:'http://127.0.0.1/audio/ㄅ.WAV',
              type:'Consonant',
            },
            {
              id:1,
              name:'ㄆ',
              pinyin:'[p]',
              audio:'http://127.0.0.1/audio/ㄆ.WAV',
              type:'Consonant',
            },
            {
              id:2,
              name:'ㄇ',
              pinyin:'[m]',
              audio:'http://127.0.0.1/audio/ㄇ.WAV',
              type:'Consonant',
            },
            {
              id:3,
              name:'ㄈ',
              pinyin:'[f]',
              audio:'http://127.0.0.1/audio/ㄈ.WAV',
              type:'Consonant',
            },
            {
              id:4,
              name:'ㄉ',
              pinyin:'[d]',
              audio:'http://127.0.0.1/audio/ㄉ.WAV',
              type:'Consonant',
            },
            {
              id:5,
              name:'ㄊ',
              pinyin:'[t]',
              audio:'http://127.0.0.1/audio/ㄊ.WAV',
              type:'Consonant',
            },
            {
              id:6,
              name:'ㄋ',
              pinyin:'[n]',
              audio:'http://127.0.0.1/audio/ㄋ.WAV',
              type:'Consonant',
            },
            {id:7,
              name:'ㄌ',
              pinyin:'[l]',
              audio:'http://127.0.0.1/audio/ㄌ.WAV',
              type:'Consonant',
            },
            {
              id:8,
              name:'ㄍ',
              pinyin:'[g]',
              audio:'http://127.0.0.1/audio/ㄍ.WAV',
              type:'Consonant',
            },
            {id:9,
              name:'ㄎ',
              pinyin:'[k]',
              audio:'http://127.0.0.1/audio/ㄎ.WAV',
              type:'Consonant',
            },
            {id:10,
              name:'ㄏ',
              pinyin:'[h]',
              audio:'http://127.0.0.1/audio/ㄏ.WAV',
              type:'Consonant',
            },
            {id:11,
              name:'ㄐ',
              pinyin:'[j]',
              audio:'http://127.0.0.1/audio/ㄐ.WAV',
              type:'Consonant',
            },
            {id:12,
              name:'ㄑ',
              pinyin:'[q]',
              audio:'http://127.0.0.1/audio/ㄑ.WAV',
              type:'Consonant',
            },
            {id:13,
              name:'ㄒ',
              pinyin:'[x]',
              audio:'http://127.0.0.1/audio/ㄒ.WAV',
              type:'Consonant',
            },
            {id:14,
              name:'ㄓ',
              pinyin:'[zh]',
              audio:'http://127.0.0.1/audio/ㄓ.WAV',
              type:'Consonant',
            },
            {id:15,
              name:'ㄔ',
              pinyin:'[ch]',
              audio:'http://127.0.0.1/audio/ㄔ.WAV',
              type:'Consonant',
            },
            {id:16,
              name:'ㄕ',
              pinyin:'[sh]',
              audio:'http://127.0.0.1/audio/ㄕ.WAV',
              type:'Consonant',
            },
            {id:17,
              name:'ㄖ',
              pinyin:'[r]',
              audio:'http://127.0.0.1/audio/ㄖ.WAV',
              type:'Consonant',
            },
            {id:18,
              name:'ㄗ',
              pinyin:'[z]',
              audio:'http://127.0.0.1/audio/ㄗ.WAV',
              type:'Consonant',
            },
            {id:19,
              name:'ㄘ',
              pinyin:'[c]',
              audio:'http://127.0.0.1/audio/ㄘ.WAV',
              type:'Consonant',
            },
            {id:20,
              name:'ㄙ',
              pinyin:'[s]',
              audio:'http://127.0.0.1/audio/ㄙ.WAV',
              type:'Consonant',
            },
            {id:21,
              name:'一',
              pinyin:'[i]',
              audio:'http://127.0.0.1/audio/ㄧ.WAV',
              type:'HeadVowel',
            },
            {id:22,
              name:'ㄨ',
              pinyin:'[wu]',
              audio:'http://127.0.0.1/audio/ㄨ.WAV',
              type:'HeadVowel',
            },
            {id:23,
              name:'ㄩ',
              pinyin:'[yu]',
              audio:'http://127.0.0.1/audio/ㄩ.WAV',
              type:'HeadVowel',
            },
            {id:24,
              name:'ㄚ',
              pinyin:'[a]',
              audio:'http://127.0.0.1/audio/ㄚ.WAV',
              type:'Vowel',
            },
            {id:25,
              name:'ㄛ',
              pinyin:'[o]',
              audio:'http://127.0.0.1/audio/ㄛ.WAV',
              type:'Vowel',
            },
            {id:26,
              name:'ㄜ',
              pinyin:'[e]',
              audio:'http://127.0.0.1/audio/ㄜ.WAV',
              type:'Vowel',
            },
            {id:27,
              name:'ㄝ',
              pinyin:'[ê]',
              audio:'http://127.0.0.1/audio/ㄝ.WAV',
              type:'Vowel',
            },
            {id:28,
              name:'ㄞ',
              pinyin:'[ai]',
              audio:'http://127.0.0.1/audio/ㄞ.WAV',
              type:'Vowel',
            },
            {id:29,
              name:'ㄟ',
              pinyin:'[ei]',
              audio:'http://127.0.0.1/audio/ㄟ.WAV',
              type:'Vowel',
            },
            {id:30,
              name:'ㄠ',
              pinyin:'[ao]',
              audio:'http://127.0.0.1/audio/ㄠ.WAV',
              type:'Vowel',
            },
            {id:31,
              name:'ㄡ',
              pinyin:'[ou]',
              audio:'http://127.0.0.1/audio/ㄡ.WAV',
              type:'Vowel',
            },
            {id:32,
              name:'ㄢ',
              pinyin:'[an]',
              audio:'http://127.0.0.1/audio/ㄢ.WAV',
              type:'Vowel',
            },
            {id:33,
              name:'ㄣ',
              pinyin:'[en]',
              audio:'http://127.0.0.1/audio/ㄣ.WAV',
              type:'Vowel',
            },
            {id:34,
              name:'ㄤ',
              pinyin:'[ang]',
              audio:'http://127.0.0.1/audio/ㄤ.WAV',
              type:'Vowel',
            },
            {id:35,
              name:'ㄥ',
              pinyin:'[eng]',
              audio:'http://127.0.0.1/audio/ㄥ.WAV',
              type:'Vowel',
            },
            {id:36,
              name:'ㄦ',
              pinyin:'[er]',
              audio:'http://127.0.0.1/audio/ㄦ.WAV',
              type:'Vowel',
            },
      ],
      filter_result:[],
      selectType:'All',
    }),
    methods:{
      audio(item){
        var audio = new Audio(item.audio)
        audio.play();
      },
      fileter(send_type){
        this.changeColor(send_type)
        // send_type.clicked = true;
        this.selectType = send_type.name ;
        if(this.selectType == 'All'){
          this.filter_result = [...this.test];
        }else{
          this.filter_result = this.test.filter(data =>{
            return data.type == this.selectType
          })
        }
      },
      changeColor(send_type){
        for(let i = 0 ; i < this.type.length ; i++){
          this.type[i].clicked = false;
        }
        send_type.clicked = true;
      },
    },
    mounted(){
      this.fileter(this.type[0])
    }
  }
</script>

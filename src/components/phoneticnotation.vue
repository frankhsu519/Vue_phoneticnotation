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
  
    <!-- 切換按鈕 -->
    <v-row class="justify-center text-center mb-5">
      <v-col col='12'>
        <v-btn v-for="(types) in type" :key="types.name" class=" my-3 mx-2 "  @click="fileter(types)" :class="{'blue-grey darken-1':!types.clicked,'green darken-1':types.clicked}">
              {{types.name}}
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="teal accent-3 justify-center align-center text-h1 show_block" style="min-height:300px;">
      <div v-if="selectType != 'Other'">
        {{screen_data}}
      </div>
      <div v-else style="border:1px solid red;">
        {{spell_}}
      </div>
      <div v-if="selectType == 'Other'" class="show_block_inside1">
        <v-btn color="yellow" @click="spell_voice(spell_)">
          voice
        </v-btn>
      </div>
      <div v-if="selectType == 'Other'" class="show_block_inside2">
        <div class="d-inline-flex flex-column">
          <v-btn color="red" v-for="notes in note" :key="notes.name" class="mb-3" @click="add_notes(notes)">
            {{notes.name}}
          </v-btn>
        </div>
      </div>
    </v-row>



    <!-- 注音按鈕 -->
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

  .show_block{
    position: relative;

    &_inside1{
      position: absolute;
      right: 0;
      top: 0;
    }
    &_inside2{
      position: absolute;
      left: 0;
      top:-23px;
    }
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
            {
              name:'Other',
              clicked:false,
            },
          ],
      test:[{
              id:0,
              name:'ㄅ',
              pinyin:'[b]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%85.WAV',
              type:'Consonant',
            },
            {
              id:1,
              name:'ㄆ',
              pinyin:'[p]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%86.WAV',
              type:'Consonant',
            },
            {
              id:2,
              name:'ㄇ',
              pinyin:'[m]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%87.WAV',
              type:'Consonant',
            },
            {
              id:3,
              name:'ㄈ',
              pinyin:'[f]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%88.WAV',
              type:'Consonant',
            },
            {
              id:4,
              name:'ㄉ',
              pinyin:'[d]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%89.WAV',
              type:'Consonant',
            },
            {
              id:5,
              name:'ㄊ',
              pinyin:'[t]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8A.WAV',
              type:'Consonant',
            },
            {
              id:6,
              name:'ㄋ',
              pinyin:'[n]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8B.WAV',
              type:'Consonant',
            },
            {id:7,
              name:'ㄌ',
              pinyin:'[l]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8C.WAV',
              type:'Consonant',
            },
            {
              id:8,
              name:'ㄍ',
              pinyin:'[g]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8D.WAV',
              type:'Consonant',
            },
            {id:9,
              name:'ㄎ',
              pinyin:'[k]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8E.WAV',
              type:'Consonant',
            },
            {id:10,
              name:'ㄏ',
              pinyin:'[h]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8F.WAV',
              type:'Consonant',
            },
            {id:11,
              name:'ㄐ',
              pinyin:'[j]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%90.WAV',
              type:'Consonant',
            },
            {id:12,
              name:'ㄑ',
              pinyin:'[q]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%91.WAV',
              type:'Consonant',
            },
            {id:13,
              name:'ㄒ',
              pinyin:'[x]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%92.WAV',
              type:'Consonant',
            },
            {id:14,
              name:'ㄓ',
              pinyin:'[zh]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%93.WAV',
              type:'Consonant',
            },
            {id:15,
              name:'ㄔ',
              pinyin:'[ch]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%94.WAV',
              type:'Consonant',
            },
            {id:16,
              name:'ㄕ',
              pinyin:'[sh]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%95.WAV',
              type:'Consonant',
            },
            {id:17,
              name:'ㄖ',
              pinyin:'[r]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%96.WAV',
              type:'Consonant',
            },
            {id:18,
              name:'ㄗ',
              pinyin:'[z]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%97.WAV',
              type:'Consonant',
            },
            {id:19,
              name:'ㄘ',
              pinyin:'[c]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%98.WAV',
              type:'Consonant',
            },
            {id:20,
              name:'ㄙ',
              pinyin:'[s]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%99.WAV',
              type:'Consonant',
            },
            {id:21,
              name:'一',
              pinyin:'[i]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A7.WAV',
              type:'HeadVowel',
            },
            {id:22,
              name:'ㄨ',
              pinyin:'[wu]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A8.WAV',
              type:'HeadVowel',
            },
            {id:23,
              name:'ㄩ',
              pinyin:'[yu]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A9.WAV',
              type:'HeadVowel',
            },
            {id:24,
              name:'ㄚ',
              pinyin:'[a]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9A.WAV',
              type:'Vowel',
            },
            {id:25,
              name:'ㄛ',
              pinyin:'[o]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9B.WAV',
              type:'Vowel',
            },
            {id:26,
              name:'ㄜ',
              pinyin:'[e]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9C.WAV',
              type:'Vowel',
            },
            {id:27,
              name:'ㄝ',
              pinyin:'[ê]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9D.WAV',
              type:'Vowel',
            },
            {id:28,
              name:'ㄞ',
              pinyin:'[ai]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9E.WAV',
              type:'Vowel',
            },
            {id:29,
              name:'ㄟ',
              pinyin:'[ei]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9F.WAV',
              type:'Vowel',
            },
            {id:30,
              name:'ㄠ',
              pinyin:'[ao]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A0.WAV',
              type:'Vowel',
            },
            {id:31,
              name:'ㄡ',
              pinyin:'[ou]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A1.WAV',
              type:'Vowel',
            },
            {id:32,
              name:'ㄢ',
              pinyin:'[an]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A2.WAV',
              type:'Vowel',
            },
            {id:33,
              name:'ㄣ',
              pinyin:'[en]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A3.WAV',
              type:'Vowel',
            },
            {id:34,
              name:'ㄤ',
              pinyin:'[ang]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A4.WAV',
              type:'Vowel',
            },
            {id:35,
              name:'ㄥ',
              pinyin:'[eng]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A5.WAV',
              type:'Vowel',
            },
            {id:36,
              name:'ㄦ',
              pinyin:'[er]',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A6.WAV',
              type:'Vowel',
            },
      ],
      note:[{
              name:'.(0)',
              mark:'˙',
            },
            {
              name:' (1)',
              mark:' ',
            },
            {
              name:'ˊ(2)',
              mark:'ˊ',
            },
            {
              name:'ˇ(3)',
              mark:'ˇ',
            },
            {
              name:'ˋ(4)',
              mark:'ˋ',
            },
          ],
      spell_sound:[
                    {
                      id:0,
                      name:'ㄅ',
                      secound_sound:[
                        {
                          id:0,
                          s_name:'.(0)',
                          audio:'https://github.com/frankhsu519/spell_sound1/raw/master/%E3%84%85%CB%99.mp3',
                        },
                        {
                          id:1,
                          s_name:' (1)',
                          audio:'https://github.com/frankhsu519/spell_sound1/raw/master/%E3%84%85.mp3',
                        },
                        {
                          id:2,
                          s_name:'ˊ(2)',
                          audio:'https://github.com/frankhsu519/spell_sound1/raw/master/%E3%84%85%CB%8A.mp3',
                        },
                        {
                          id:3,
                          s_name:'ˇ(3)',
                          audio:'https://github.com/frankhsu519/spell_sound1/raw/master/%E3%84%85%CB%87.mp3',
                        },
                        {
                          id:4,
                          s_name:'ˋ(4)',
                          audio:'https://github.com/frankhsu519/spell_sound1/raw/master/%E3%84%85%CB%8B.mp3',
                        },
                      ]
                    }
                  ],
      filter_result:[],
      selectType:'All',
      screen_data:'',
      spell_:'',
    }),
    methods:{
      audio(item){
        var audio = new Audio(item.audio)
        audio.play();
        
        this.show_data(item)
      },
      fileter(send_type){
        this.changeColor(send_type)
        // send_type.clicked = true;
        this.selectType = send_type.name ;
        if(this.selectType == 'All'){
          this.filter_result = [...this.test];
        }else if(this.selectType == 'Other'){
          alert('拼寫模式')
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
      show_data(send_data){
        if(this.selectType != 'Other'){
          this.screen_data = send_data.name;
        }
        else{
          this.spell_ += send_data.name
        }
      },
      spell_voice(send_spell){
        console.log('送進來的',send_spell);
        var tmp_str = send_spell.split('')
        console.log(tmp_str);
        console.log(tmp_str[0]);
        // this.find_first_voice(tmp_str[0])
      },
      add_notes(send_notes){
        this.spell_ += send_notes.mark;
      },
      find_first_voice(first_str){
        for (let i = 0 ; i < this.spell_sound.length ; i++){
          if(this.spell_sound[i].name == first_str ){
            
          }
        }
      }
    },
    mounted(){
      this.fileter(this.type[0])
    }
  }
</script>

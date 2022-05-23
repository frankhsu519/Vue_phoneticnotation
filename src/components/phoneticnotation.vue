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
      <div v-if="selectType != 'Free combination'">
        {{screen_data}}
      </div>
      <div v-else style="max-width: 85%;">
        {{spell_}}<br>
        <!-- {{spell_pinyin}} -->

        <div style="display:flex;flex-wrap:wrap;">
          <div v-for="(arr,i) in pinyin_arr " :key="i" v-show ="arr.length != 0">
            [{{arr}}] &nbsp;
          </div>
        </div>
      </div>
      <div v-if="selectType == 'Free combination'" class="show_block_inside1">
        <v-btn color="yellow" @click="spell_voice(spell_array)">
          voice
        </v-btn>
      </div>
      <div v-if="selectType == 'Free combination'" class="show_block_inside3">
        <v-btn color="red" @click="clear()">
          clear
        </v-btn>
      </div>
      <div v-if="selectType == 'Free combination'" class="show_block_inside2">
        <div class="d-inline-flex flex-column">
          <v-btn color="red" v-for="notes in note" :key="notes.name" class="mb-3 voice_note" @click="add_notes(notes)">
            {{notes.name}}
          </v-btn>
        </div>
      </div>

    </v-row>

    <!-- 注音按鈕 -->
    <v-row>
      <v-col col='12' class="d-flex flex-wrap justify-start">
        <v-btn v-for="(item,i) in filter_result" :key="i" class="box my-3 mx-2 text-lowercase" color='info' @click='audio(item)'>
          {{item.name}}
          <br>
          {{item.pinyin}}
        </v-btn>
      </v-col>
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

  @media screen and (max-width:1280px) {
    .box{
      width: calc(25% - 16px);
    }
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
    &_inside3{
      position: absolute;
      right: 0;
      top:130px;
    }
  }
  
  @media screen and (max-width:1280px) {
      .voice_note{
        width: 100px;
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
              name:'Free combination',
              clicked:false,
            },
          ],
      test:[{
              id:0,
              name:'ㄅ',
              pinyin:'[b]',
              pinyin_mark:'b',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%85.WAV',
              type:'Consonant',
            },
            {
              id:1,
              name:'ㄆ',
              pinyin:'[p]',
              pinyin_mark:'p', 
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%86.WAV',
              type:'Consonant',
            },
            {
              id:2,
              name:'ㄇ',
              pinyin:'[m]',
              pinyin_mark:'m',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%87.WAV',
              type:'Consonant',
            },
            {
              id:3,
              name:'ㄈ',
              pinyin:'[f]',
              pinyin_mark:'f',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%88.WAV',
              type:'Consonant',
            },
            {
              id:4,
              name:'ㄉ',
              pinyin:'[d]',
              pinyin_mark:'d',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%89.WAV',
              type:'Consonant',
            },
            {
              id:5,
              name:'ㄊ',
              pinyin:'[t]',
              pinyin_mark:'t',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8A.WAV',
              type:'Consonant',
            },
            {
              id:6,
              name:'ㄋ',
              pinyin:'[n]',
              pinyin_mark:'n',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8B.WAV',
              type:'Consonant',
            },
            {id:7,
              name:'ㄌ',
              pinyin:'[l]',
              pinyin_mark:'l',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8C.WAV',
              type:'Consonant',
            },
            {
              id:8,
              name:'ㄍ',
              pinyin:'[g]',
              pinyin_mark:'g',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8D.WAV',
              type:'Consonant',
            },
            {id:9,
              name:'ㄎ',
              pinyin:'[k]',
              pinyin_mark:'k',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8E.WAV',
              type:'Consonant',
            },
            {id:10,
              name:'ㄏ',
              pinyin:'[h]',
              pinyin_mark:'h',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%8F.WAV',
              type:'Consonant',
            },
            {id:11,
              name:'ㄐ',
              pinyin:'[j]',
              pinyin_mark:'j',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%90.WAV',
              type:'Consonant',
            },
            {id:12,
              name:'ㄑ',
              pinyin:'[q]',
              pinyin_mark:'q',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%91.WAV',
              type:'Consonant',
            },
            {id:13,
              name:'ㄒ',
              pinyin:'[x]',
              pinyin_mark:'x',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%92.WAV',
              type:'Consonant',
            },
            {id:14,
              name:'ㄓ',
              pinyin:'[zh]',
              pinyin_mark:'zh',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%93.WAV',
              type:'Consonant',
            },
            {id:15,
              name:'ㄔ',
              pinyin:'[ch]',
              pinyin_mark:'ch',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%94.WAV',
              type:'Consonant',
            },
            {id:16,
              name:'ㄕ',
              pinyin:'[sh]',
              pinyin_mark:'sh',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%95.WAV',
              type:'Consonant',
            },
            {id:17,
              name:'ㄖ',
              pinyin:'[r]',
              pinyin_mark:'r',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%96.WAV',
              type:'Consonant',
            },
            {id:18,
              name:'ㄗ',
              pinyin:'[z]',
              pinyin_mark:'z',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%97.WAV',
              type:'Consonant',
            },
            {id:19,
              name:'ㄘ',
              pinyin:'[c]',
              pinyin_mark:'c',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%98.WAV',
              type:'Consonant',
            },
            {id:20,
              name:'ㄙ',
              pinyin:'[s]',
              pinyin_mark:'s',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%99.WAV',
              type:'Consonant',
            },
            {id:21,
              name:'一',
              pinyin:'[i]',
              pinyin_mark:'i',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A7.WAV',
              type:'HeadVowel',
            },
            {id:22,
              name:'ㄨ',
              pinyin:'[wu]',
              pinyin_mark:'wu',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A8.WAV',
              type:'HeadVowel',
            },
            {id:23,
              name:'ㄩ',
              pinyin:'[yu]',
              pinyin_mark:'yu',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A9.WAV',
              type:'HeadVowel',
            },
            {id:24,
              name:'ㄚ',
              pinyin:'[a]',
              pinyin_mark:'a',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9A.WAV',
              type:'Vowel',
            },
            {id:25,
              name:'ㄛ',
              pinyin:'[o]',
              pinyin_mark:'o',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9B.WAV',
              type:'Vowel',
            },
            {id:26,
              name:'ㄜ',
              pinyin:'[e]',
              pinyin_mark:'e',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9C.WAV',
              type:'Vowel',
            },
            {id:27,
              name:'ㄝ',
              pinyin:'[ê]',
              pinyin_mark:'ê',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9D.WAV',
              type:'Vowel',
            },
            {id:28,
              name:'ㄞ',
              pinyin:'[ai]',
              pinyin_mark:'ai',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9E.WAV',
              type:'Vowel',
            },
            {id:29,
              name:'ㄟ',
              pinyin:'[ei]',
              pinyin_mark:'ei',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%9F.WAV',
              type:'Vowel',
            },
            {id:30,
              name:'ㄠ',
              pinyin:'[ao]',
              pinyin_mark:'ao',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A0.WAV',
              type:'Vowel',
            },
            {id:31,
              name:'ㄡ',
              pinyin:'[ou]',
              pinyin_mark:'ou',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A1.WAV',
              type:'Vowel',
            },
            {id:32,
              name:'ㄢ',
              pinyin:'[an]',
              pinyin_mark:'an',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A2.WAV',
              type:'Vowel',
            },
            {id:33,
              name:'ㄣ',
              pinyin:'[en]',
              pinyin_mark:'en',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A3.WAV',
              type:'Vowel',
            },
            {id:34,
              name:'ㄤ',
              pinyin:'[ang]',
              pinyin_mark:'ang',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A4.WAV',
              type:'Vowel',
            },
            {id:35,
              name:'ㄥ',
              pinyin:'[eng]',
              pinyin_mark:'eng',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A5.WAV',
              type:'Vowel',
            },
            {id:36,
              name:'ㄦ',
              pinyin:'[er]',
              pinyin_mark:'er',
              audio:'https://github.com/frankhsu519/Vue_phoneticnotation/raw/gh-pages/audio/%E3%84%A6.WAV',
              type:'Vowel',
            },
      ],
      note:[{
              name:'.(0 sound)',
              mark:'˙',
            },
            {
              name:' (1 sound)',
              mark:' ',
            },
            {
              name:'ˊ(2 sound)',
              mark:'ˊ',
            },
            {
              name:'ˇ(3 sound)',
              mark:'ˇ',
            },
            {
              name:'ˋ(4 sound)',
              mark:'ˋ',
            },
          ],

      filter_result:[],
      selectType:'',
      screen_data:'',
      spell_:'',
      spell_pinyin:'',
      current_spell_:'',
      spell_array: [],
      current_array:[],

      // 顯示在螢幕上 
      pinyin_str:'',
      pinyin_arr:[],

    }),

    watch:{
      pinyin_str :function(){
        this.pinyin_arr = this.pinyin_str.split('=')
      }
    },



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
        }else if(this.selectType == 'Free combination'){
          alert('Free combination')
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
        if(this.selectType != 'Free combination'){
          this.screen_data = send_data.name;
        }
        else{
          // 資料處理部分
          this.spell_ += send_data.name;
          this.spell_pinyin += send_data.pinyin;
          this.current_spell_ += send_data.name;

          // 顯示在螢幕部分
          this.pinyin_str += send_data.pinyin_mark

          // console.log('這是spell_:',this.spell_);
          // console.log('current_spell_:',this.current_spell_);

        }
      },
      // spell_voice(send_spell){
      //   console.log('送進來的',send_spell);

      //   var that = this;
      //   for(let i = 0; i < send_spell.length ;i++){
      //     let first_spell_str = send_spell[i].split('',1);
      //     let other_spell_str = send_spell[i].split('');
      //     other_spell_str.splice(0,1)
      //     other_spell_str = other_spell_str.join('')
      //     console.log('這是字first_spell_str:',first_spell_str);
      //     console.log('這是other_spell_str:',other_spell_str);
          
      //     setTimeout(function(){
      //       that.find_first_voice(first_spell_str,other_spell_str)
      //     }, 1000 * i)
      //   }

      // },
      add_notes(send_notes){
        this.spell_ += send_notes.mark;
        this.current_spell_+= send_notes.mark;
        this.current_array.push(this.current_spell_);

        // test
        this.pinyin_str += send_notes.mark;
        this.pinyin_str += '='



        this.spell_voice(this.current_array);
        this.spell_array.push(this.current_spell_);
        this.current_spell_ ='';
        this.current_array=[];
      },
      // find_first_voice(first_str,other_spell_str){
      //   for (let i = 0 ; i < this.spell_sound.length ; i++){
      //     if(this.spell_sound[i].name == first_str ){
      //       var first_sound = this.spell_sound[i];
      //       // console.log('check',first_sound);
      //         this.find_toned(first_sound,other_spell_str)
      //     }
      //   }
      // },

      // find_toned(first_sound,other_spell_str){
      //     for(let j = 0 ;j < first_sound.secound_sound.length ; j++){
      //       if(first_sound.secound_sound[j].s_name == other_spell_str){
      //         this.spell_audio(first_sound.secound_sound[j])
      //           console.log('發音', first_sound.secound_sound[j]);
      //       }
      //     }
      // },
      spell_audio(send_data){
        let check_array = []
        let check_res = false;

        // switch(send_data.check){
        //   case '1':
        //     check_array = {...this.api_data1}
        //     break;
        //   case '2':
        //     check_array = {...this.api_data2}
        //     break;
        //   case '3':
        //     check_array = {...this.api_data3}
        //     break;  
        // }

        if(send_data.check == '1'){
          check_array = [...this.api_data1]
        }else if(send_data.check == '2'){
          check_array = [...this.api_data2]
        }else{
          check_array = [...this.api_data3]
        }

        for( let i = 0 ; i < check_array.length ;i++){
          if(send_data.html_url == check_array[i].html_url){
            check_res = true;
          }
        }
        if(check_res){
          var audio = new Audio(send_data.audio)
            audio.play();
        }else{
          alert('Sorry no this sound , 沒有此音檔')
        }
      },
      clear(){
        this.spell_= '';
        this.spell_pinyin= '';
        this.current_spell_= '';
        this.spell_array = [];
        this.pinyin_str = '';
      },

      spell_voice(send_spell){
        // console.log('送進來的',send_spell);

        var that = this;

        for (let i = 0 ; i < send_spell.length ;i++ ){
          // console.log(send_spell[i]);
          var that = this;
          // console.log('看一下轉化的東西',encodeURI(send_spell[i]));
          let send_Data = {};
          send_Data.toUnicode = encodeURI(send_spell[i])
          if(send_Data.toUnicode < encodeURI('ㄏㄟ ')){
            send_Data.audio = `https://github.com/frankhsu519/spell_sound1/raw/master/${send_Data.toUnicode}.mp3`;
            send_Data.html_url=`https://github.com/frankhsu519/spell_sound1/blob/master/${send_Data.toUnicode}.mp3`;
            send_Data.check = '1';
          }else if(send_Data.toUnicode < encodeURI('ㄨㄢ ')){
            send_Data.audio = `https://github.com/frankhsu519/spell_sound2/raw/master/${send_Data.toUnicode}.mp3`;
            send_Data.html_url=`https://github.com/frankhsu519/spell_sound2/blob/master/${send_Data.toUnicode}.mp3`;
            send_Data.check = '2';
          }else{
            send_Data.audio = `https://github.com/frankhsu519/spell_sound3/raw/master/${send_Data.toUnicode}.mp3`;
            send_Data.html_url=`https://github.com/frankhsu519/spell_sound3/blob/master/${send_Data.toUnicode}.mp3`;
            send_Data.check = '3';
          }

          setTimeout(function(){
            that.spell_audio(send_Data)
          }, 1000 * i)
        }

      },
      getApi_data(){
        this.axios.get(`https://api.github.com/repos/frankhsu519/spell_sound1/contents`)
            .then( (response) => {
                // console.log(response)
                if(response.status =='200'){
                  this.api_data1 = response.data;
                }
              }
            )
            .catch( (error) => {
                console.log(error)
                alert('找不到1')
              }
            )
        this.axios.get(`https://api.github.com/repos/frankhsu519/spell_sound2/contents`)
            .then( (response) => {
                // console.log(response)
                if(response.status =='200'){
                  this.api_data2 = response.data;
                }
              }
            )
            .catch( (error) => {
                console.log(error)
                alert('找不到2')
              }
            )
        this.axios.get(`https://api.github.com/repos/frankhsu519/spell_sound3/contents`)
            .then( (response) => {
                // console.log(response)
                if(response.status =='200'){
                  this.api_data3 = response.data;
                }
              }
            )
            .catch( (error) => {
                console.log(error)
                alert('找不到3')
              }
            )
      }
    },
    mounted(){
      // 初始 設定 顯示全部注音
      this.fileter(this.type[0])

      // 先向 github 要音檔資訊
      this.getApi_data()
    }
  }
</script>
var app = new Vue({
    el : '#app',
    data : {
        mode : 'list', 
        memo : {
          id: null,
          centent:null,
          regDate : null

        },
        memos : [
            // {
            //     id : 1,
            //     content : '메모 #1',
            //     regDate :  new Date()
            // },
            // {
            //     id : 2,
            //     content : '메모 #2',
            //     regDate :  new Date()
            // },
            // {
            //     id : 3,
            //     content : '메모 #3',
            //     regDate :  new Date()
            // }
        ]
        
    },
    methods :{
        write : function(){
            this.mode='write';
        },
        save : function(){
            var id = this.memos.length + 1;

            this.memos.push({
                id: id,
                content: this.memo.centent,
                regDate : new Date()

            })
            this.memo.centent = null;
            this.mode='list';

            localStorage.setItem('memos',JSON.stringify(this.memos));
        },
        cancel : function(){
            this.mode='list';
        }
    }
})
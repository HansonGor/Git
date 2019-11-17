Component({
    properties: {
        isShowDialog: Boolean,
        options: Object,
        callback: String
    },
    data: {},
    methods: {
        openDialog: function () {
            this.setData({
                isShowDialog: true
            })
        },
        closeDialog: function () {
            console.log('closeDialog')
            let isShowDialog = false
            this.triggerEvent('callback', {
                isShowDialog
            });
            this.setData({
                isShowDialog
            })
        },
        confirmDialog: function (e) {
            console.log('confirmDialog')
            // console.log(e.currentTarget.dataset.type)
            let type = e.currentTarget.dataset.type
            let isShowDialog = false
            this.triggerEvent('callback', {
                type,
                isShowDialog
            });
            this.setData({
                isShowDialog
            })
        }
    },
});
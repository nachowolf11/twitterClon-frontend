import moment from "moment"

export const getTimeAgo = (creationDate) =>{
    let timeAgo = ''
    const a = moment(creationDate)
    const b = moment(new Date().toISOString());

    if(b.diff(a, 'hours') < 24){
        timeAgo = b.to(a);
    }else if(a.diff(b, 'years') > 0){
        timeAgo = a.format('MMM DD AAAA')
    }else{
        timeAgo = a.format('MMM DD')
    }

    return timeAgo
}
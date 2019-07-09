angular
.module('mainApp')
.service('socialActivitiesService', function socialActivitiesService(Restangular) {
    this.getList = function () {
        var socialActivities = Restangular.one(SOCIAL_ACTIVITIES_SUFFIX);
        return socialActivities.get();
    }
});

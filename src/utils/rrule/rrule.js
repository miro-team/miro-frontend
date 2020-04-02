import { RRule as RRuleLib } from 'rrule';


export class RRule {
  constructor(rrule) {
    if (typeof rrule === 'string') {
      this.instance = RRuleLib.fromString(rrule);
    }

    if (typeof rrule === 'object') {
      const { freq, interval, until, count, weekDays, startDate, endingType, semesterEnd } = rrule;
      const rruleWeekDays = [RRuleLib.SU, RRuleLib.MO, RRuleLib.TU, RRuleLib.WE, RRuleLib.TH, RRuleLib.FR, RRuleLib.SA];

      if (until) {
        until.setHours(23);
        until.setMinutes(59);
        until.setSeconds(59);
        until.setMilliseconds(999);
      }

      if (semesterEnd) {
        semesterEnd.setHours(23);
        semesterEnd.setMinutes(59);
        semesterEnd.setSeconds(59);
        semesterEnd.setMilliseconds(999);
      }

      const options = {
        freq,
        interval,
        until: endingType === RRule.DATE ? until : endingType === RRule.SEMESTER ? semesterEnd : null,
        count: endingType === RRule.COUNT ? count : null,
        byweekday: weekDays ? weekDays.map(weekDay => rruleWeekDays[weekDay]) : null,
      };

      this.instance = new RRuleLib({ ...options, dtstart: startDate });
      this.startlessInstance = new RRuleLib(options);
      this.endingType = endingType;
      this.semesterEnd = semesterEnd;
    }
  }

  get isValid() {
    if (!this.instance || !this.instance.options) {
      return false;
    }

    const { interval, count } = this.instance.options;

    if (!interval || interval < 1) {
      return false;
    }
    if (this.endingType === RRule.COUNT && (!count || count < 1)) {
      return false;
    }
    if (this.endingType === RRule.SEMESTER && !this.semesterEnd) {
      return false;
    }

    return true;
  }

  all() {
    if (!this.isValid) {
      return [];
    }

    return this.instance.all();
  }

  toText(noStartDate) {
    const russianStrings = {
      every: 'кажд.',
      until: 'до',
      day: 'день',
      days: 'дн.',
      week: 'нед.',
      weeks: 'нед.',
      on: 'в',
      in: 'в',
      'on the': '',
      for: '',
      and: 'и',
      or: 'или',
      at: 'в',
      last: 'последний',
      '(~ approximate)': '(~ примерно)',
      times: 'раз',
      time: 'время',
      minutes: 'минуты',
      hours: 'часы',
      weekdays: 'дни недели',
      weekday: 'день недели',
      months: 'месяцы',
      month: 'месяц',
      years: 'года',
      year: 'год'
    };

    const RRULE_RUSSIAN = {
      dayNames: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
      monthNames: [
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек'
      ]
    };

    const gettext = id => {
      return russianStrings[id] !== undefined ? russianStrings[id] : id;
    };

    return noStartDate ? this.startlessInstance.toText(gettext, RRULE_RUSSIAN) : this.instance.toText(gettext, RRULE_RUSSIAN);
  }

  toString(noStartDate) {
    return noStartDate ? this.startlessInstance.toString() : this.instance.toString();
  }

  static get WEEKLY() {
    return RRuleLib.WEEKLY;
  }

  static get SEMESTER() {
    return 'SEMESTER';
  }

  static get COUNT() {
    return 'COUNT';
  }

  static get DATE() {
    return 'DATE';
  }
}

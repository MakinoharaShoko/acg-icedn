/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * 条目类型 <br> 1 = book <br> 2 = anime <br> 3 = music <br> 4 = game <br> 6 = real
 * @example 2
 */
export enum LegacySubjectType {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value6 = 6,
}

export interface LegacySubjectSmall {
  /**
   * 条目 ID
   * @example 12
   */
  id?: number;
  /**
   * 条目地址
   * @example "https://bgm.tv/subject/12"
   */
  url?: string;
  /**
   * SubjectType
   * 条目类型
   * - `1` 为 书籍
   * - `2` 为 动画
   * - `3` 为 音乐
   * - `4` 为 游戏
   * - `6` 为 三次元
   *
   * 没有 `5`
   * @example 2
   */
  type?: 1 | 2 | 3 | 4 | 6;
  /**
   * 条目名称
   * @example "ちょびっツ"
   */
  name?: string;
  /**
   * 条目中文名称
   * @example "人形电脑天使心"
   */
  name_cn?: string;
  /**
   * 剧情简介
   * @example "在不久的将来,电子技术飞速发展,电脑成为人们生活中不可缺少的一部分.主角的名字是本须和秀树,是个19岁的少年,由于考试失败,来到东京上补习班,过着贫穷潦倒的生活……\r\n到达东京的第一天,他很幸运的在垃圾堆捡到一个人型电脑,一直以来秀树都非常渴望拥有个人电脑.当他抱着她带返公寓后,却不知如何开机,在意想不到的地方找到开关并开启后,故事就此展开\r\n本须和秀树捡到了人型计算机〔唧〕。虽然不晓得她到底是不是〔Chobits〕，但她的身上似乎藏有极大的秘密。看到秀树为了钱而烦恼，唧出去找打工，没想到却找到了危险的工作！为了让秀树开心，唧开始到色情小屋打工。但她在遭到过度激烈的强迫要求之后失控。让周遭计算机因此而强制停摆。\r\n另一方面，秀树发现好友新保与补习班的清水老师有着不可告人的关系……"
   */
  summary?: string;
  /**
   * 放送开始日期
   * @example "2002-04-02"
   */
  air_date?: string;
  /**
   * 放送星期
   * @example 2
   */
  air_weekday?: number;
  /** 封面 */
  images?: {
    /** @example "https://lain.bgm.tv/pic/cover/l/c2/0a/12_24O6L.jpg" */
    large?: string;
    /** @example "https://lain.bgm.tv/pic/cover/c/c2/0a/12_24O6L.jpg" */
    common?: string;
    /** @example "https://lain.bgm.tv/pic/cover/m/c2/0a/12_24O6L.jpg" */
    medium?: string;
    /** @example "https://lain.bgm.tv/pic/cover/s/c2/0a/12_24O6L.jpg" */
    small?: string;
    /** @example "https://lain.bgm.tv/pic/cover/g/c2/0a/12_24O6L.jpg" */
    grid?: string;
  };
  /**
   * 话数
   * @example 27
   */
  eps?: number;
  /**
   * 话数
   * @example 27
   */
  eps_count?: number;
  /** 评分 */
  rating?: {
    /**
     * 总评分人数
     * @example 2289
     */
    total?: number;
    /** 各分值评分人数 */
    count?: {
      /** @example 5 */
      "1"?: number;
      /** @example 3 */
      "2"?: number;
      /** @example 4 */
      "3"?: number;
      /** @example 6 */
      "4"?: number;
      /** @example 46 */
      "5"?: number;
      /** @example 267 */
      "6"?: number;
      /** @example 659 */
      "7"?: number;
      /** @example 885 */
      "8"?: number;
      /** @example 284 */
      "9"?: number;
      /** @example 130 */
      "10"?: number;
    };
    /**
     * 评分
     * @example 7.6
     */
    score?: number;
  };
  /**
   * 排名
   * @example 573
   */
  rank?: number;
  /** 收藏人数 */
  collection?: {
    /**
     * 想做
     * @example 608
     */
    wish?: number;
    /**
     * 做过
     * @example 3010
     */
    collect?: number;
    /**
     * 在做
     * @example 103
     */
    doing?: number;
    /**
     * 搁置
     * @example 284
     */
    on_hold?: number;
    /**
     * 抛弃
     * @example 86
     */
    dropped?: number;
  };
}

export type LegacySubjectMedium = LegacySubjectSmall & {
  /** 角色信息 */
  crt?: (LegacyCharacter & {
    /**
     * 角色类型
     * @example "主角"
     */
    role_name?: string;
  })[];
  /** 制作人员信息 */
  staff?: (LegacyPerson & {
    /**
     * 人物类型
     * @example "主角"
     */
    role_name?: string;
    /** 职位 */
    jobs?: string[];
  })[];
};

export type LegacySubjectLarge = LegacySubjectMedium & {
  /** 章节列表 */
  eps?: LegacyEpisode[];
  /** 讨论版 */
  topic?: LegacyTopic[];
  /** 评论日志 */
  blog?: LegacyBlog[];
};

/**
 * 章节类型 <br> 0 = 本篇 <br> 1 = 特别篇 <br> 2 = OP <br> 3 = ED <br> 4 = 预告/宣传/广告 <br> 5 = MAD <br> 6 = 其他
 * @example 0
 */
export enum LegacyEpisodeType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

/** 章节信息 */
export interface LegacyEpisode {
  /**
   * 章节 ID
   * @example 1027
   */
  id?: number;
  /**
   * 章节地址
   * @example "https://bgm.tv/ep/1027"
   */
  url?: string;
  /** 章节类型 <br> 0 = 本篇 <br> 1 = 特别篇 <br> 2 = OP <br> 3 = ED <br> 4 = 预告/宣传/广告 <br> 5 = MAD <br> 6 = 其他 */
  type?: LegacyEpisodeType;
  /**
   * 集数
   * @example 1
   */
  sort?: number;
  /**
   * 标题
   * @example "ちぃ 目覚める"
   */
  name?: string;
  /**
   * 简体中文标题
   * @example "叽，觉醒了"
   */
  name_cn?: string;
  /**
   * 时长
   * @example "24m"
   */
  duration?: string;
  /**
   * 放送日期
   * @example "2002-04-03"
   */
  airdate?: string;
  /**
   * 回复数量
   * @example 9
   */
  comment?: number;
  /** 简介 */
  desc?: string;
  /**
   * 放送状态 <br> Air = 已放送 <br> Today = 正在放送 <br> NA = 未放送
   * @example "Air"
   */
  status?: "Air" | "Today" | "NA";
}

/** 讨论版 */
export interface LegacyTopic {
  /** ID */
  id?: number;
  /** 地址 */
  url?: string;
  /** 标题 */
  title?: string;
  /** 所属对象（条目） ID */
  main_id?: number;
  /** 发布时间 */
  timestamp?: number;
  /** 最后回复时间 */
  lastpost?: number;
  /** 回复数 */
  replies?: number;
  /** 用户信息 */
  user?: LegacyUser;
}

/** 日志 */
export interface LegacyBlog {
  /** ID */
  id?: number;
  /** 地址 */
  url?: string;
  /** 标题 */
  title?: string;
  /** 概览 */
  summary?: string;
  /** 图片 */
  image?: string;
  /** 回复数 */
  replies?: number;
  /**
   * 发布时间
   * @example 1357144903
   */
  timestamp?: number;
  /**
   * 发布时间
   * @example "2013-1-2 16:41"
   */
  dateline?: string;
  /** 用户信息 */
  user?: LegacyUser;
}

/** 用户信息 */
export interface LegacyUser {
  /**
   * 用户 id
   * @example 1
   */
  id?: number;
  /**
   * 用户主页地址
   * @example "https://bgm.tv/user/sai"
   */
  url?: string;
  /**
   * 用户名
   * @example "sai"
   */
  username?: string;
  /**
   * 昵称
   * @example "Sai"
   */
  nickname?: string;
  /** 头像地址 */
  avatar?: {
    /** @example "https://lain.bgm.tv/pic/user/l/000/00/00/1.jpg?r=1391790456" */
    large?: string;
    /** @example "https://lain.bgm.tv/pic/user/m/000/00/00/1.jpg?r=1391790456" */
    medium?: string;
    /** @example "https://lain.bgm.tv/pic/user/s/000/00/00/1.jpg?r=1391790456" */
    small?: string;
  };
  /**
   * 签名
   * @example "Awesome!"
   */
  sign?: string;
  /** 用户组 <br> 1 = 管理员 <br> 2 = Bangumi 管理猿 <br> 3 = 天窗管理猿 <br> 4 = 禁言用户 <br> 5 = 禁止访问用户 <br> 8 = 人物管理猿 <br> 9 = 维基条目管理猿 <br> 10 = 用户 <br> 11 = 维基人 */
  usergroup?: LegacyUserGroup;
}

/**
 * 用户组 <br> 1 = 管理员 <br> 2 = Bangumi 管理猿 <br> 3 = 天窗管理猿 <br> 4 = 禁言用户 <br> 5 = 禁止访问用户 <br> 8 = 人物管理猿 <br> 9 = 维基条目管理猿 <br> 10 = 用户 <br> 11 = 维基人
 * @example 11
 */
export enum LegacyUserGroup {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value8 = 8,
  Value9 = 9,
  Value10 = 10,
  Value11 = 11,
}

/** 现实人物 */
export type LegacyPerson = LegacyMono & {
  /** 人物信息 */
  info?: LegacyMonoInfo;
};

/** 虚拟角色 */
export type LegacyCharacter = LegacyMono & {
  /** 人物信息 */
  info?: LegacyMonoInfo;
  /** 声优列表 */
  actors?: LegacyMonoBase[];
};

/** 人物（基础模型） */
export interface LegacyMonoBase {
  /** 人物 ID */
  id?: number;
  /** 人物地址 */
  url?: string;
  /** 姓名 */
  name?: string;
  /** 肖像 */
  images?: {
    /** @example "https://lain.bgm.tv/pic/crt/l/ce/65/32_crt_XMJOj.jpg" */
    large?: string;
    /** @example "https://lain.bgm.tv/pic/crt/m/ce/65/32_crt_XMJOj.jpg" */
    medium?: string;
    /** @example "https://lain.bgm.tv/pic/crt/s/ce/65/32_crt_XMJOj.jpg" */
    small?: string;
    /** @example "https://lain.bgm.tv/pic/crt/g/ce/65/32_crt_XMJOj.jpg" */
    grid?: string;
  };
}

/** 人物 */
export type LegacyMono = LegacyMonoBase & {
  /** 简体中文名 */
  name_cn?: string;
  /** 回复数量 */
  comment?: number;
  /** 收藏人数 */
  collects?: number;
};

/** 人物信息 */
export interface LegacyMonoInfo {
  /**
   * 生日
   * @example "4月13日"
   */
  birth?: string;
  /**
   * 身高
   * @example "152cm"
   */
  height?: string;
  /**
   * 性别
   * @example "女"
   */
  gender?: string;
  /** 别名（另外添加出来的 key 为 0 开始的数字） */
  alias?: {
    /** 日文名 */
    jp?: string;
    /** 纯假名 */
    kana?: string;
    /** 昵称 */
    nick?: string;
    /** 罗马字 */
    romaji?: string;
    /** 第二中文名 */
    zh?: string;
  };
  /** 引用来源 */
  source?: string | string[];
  /** 简体中文名 */
  name_cn?: string;
  /** 声优 */
  cv?: string;
}

/**
 * Subject ID
 * 条目 ID
 * @min 1
 */
export type SubjectID = number;

/**
 * User
 * 实际的返回值可能包括文档未声明的 `url` 字段，此字段主要用于开发者从 api 响应直接转跳到网页。
 * 客户端开发者请不用依赖于此特性，此字段的值随时可能会改变。
 * @example {"avatar":{"large":"https://lain.bgm.tv/pic/user/l/000/00/00/1.jpg?r=1391790456","medium":"https://lain.bgm.tv/pic/user/m/000/00/00/1.jpg?r=1391790456","small":"https://lain.bgm.tv/pic/user/s/000/00/00/1.jpg?r=1391790456"},"sign":"Awesome!","username":"sai","nickname":"Sai🖖","id":1,"user_group":1}
 */
export interface User {
  /** ID */
  id: number;
  /**
   * Username
   * 唯一用户名，初始与 UID 相同，可修改一次
   */
  username: string;
  /** Nickname */
  nickname: string;
  /** 用户组 - 1 = 管理员 - 2 = Bangumi 管理猿 - 3 = 天窗管理猿 - 4 = 禁言用户 - 5 = 禁止访问用户 - 8 = 人物管理猿 - 9 = 维基条目管理猿 - 10 = 用户 - 11 = 维基人 */
  user_group: UserGroup;
  avatar: Avatar;
  /**
   * Sign
   * 个人签名
   */
  sign: string;
}

/**
 * Avatar
 * @example {"large":"https://lain.bgm.tv/pic/user/l/000/00/00/1.jpg?r=1391790456","medium":"https://lain.bgm.tv/pic/user/m/000/00/00/1.jpg?r=1391790456","small":"https://lain.bgm.tv/pic/user/s/000/00/00/1.jpg?r=1391790456"}
 */
export interface Avatar {
  /**
   * Large
   * @format url
   */
  large: string;
  /**
   * Medium
   * @format url
   */
  medium: string;
  /**
   * Small
   * @format url
   */
  small: string;
}

/**
 * UserGroup
 * 用户组 - 1 = 管理员 - 2 = Bangumi 管理猿 - 3 = 天窗管理猿 - 4 = 禁言用户 - 5 = 禁止访问用户 - 8 = 人物管理猿 - 9 = 维基条目管理猿 - 10 = 用户 - 11 = 维基人
 */
export enum UserGroup {
  Admin = 1,
  BangumiAdmin = 2,
  DoujinAdmin = 3,
  MutedUser = 4,
  BlockedUser = 5,
  PersonAdmin = 8,
  WikiAdmin = 9,
  User = 10,
  WikiUser = 11,
}

/**
 * BloodType
 * Blood type of a person. A, B, AB, O
 */
export enum BloodType {
  A = 1,
  B = 2,
  AB = 3,
  O = 4,
}

/** CharacterDetail */
export interface CharacterDetail {
  /** ID */
  id: number;
  /** Name */
  name: string;
  /** 角色，机体，舰船，组织... */
  type: CharacterType;
  /**
   * Images
   * object with some size of images, this object maybe `null`
   */
  images?: PersonImages;
  /** Summary */
  summary: string;
  /** Locked */
  locked: boolean;
  /**
   * Infobox
   * server parsed infobox, a map from key to string or tuple
   * null if server infobox is not valid
   */
  infobox?: object[];
  /**
   * Gender
   * parsed from wiki, maybe null
   */
  gender?: string;
  /** parsed from wiki, maybe null, `1, 2, 3, 4` for `A, B, AB, O` */
  blood_type?: BloodType;
  /**
   * Birth Year
   * parsed from wiki, maybe `null`
   */
  birth_year?: number;
  /**
   * Birth Mon
   * parsed from wiki, maybe `null`
   */
  birth_mon?: number;
  /**
   * Birth Day
   * parsed from wiki, maybe `null`
   */
  birth_day?: number;
  stat: Stat;
}

/** CharacterPerson */
export interface CharacterPerson {
  /** ID */
  id: number;
  /** Name */
  name: string;
  /** 角色，机体，舰船，组织... */
  type: CharacterType;
  /**
   * Images
   * object with some size of images, this object maybe `null`
   */
  images?: PersonImages;
  /** Subject ID */
  subject_id: number;
  /** Subject Name */
  subject_name: string;
  /** Subject Name Cn */
  subject_name_cn: string;
  /** Staff */
  staff?: string;
}

/**
 * CharacterType
 * type of a character 角色，机体，舰船，组织...
 */
export enum CharacterType {
  Character = 1,
  Mechanic = 2,
  Ship = 3,
  Organization = 4,
}

/**
 * CollectionType
 * - `1`: 想看
 * - `2`: 看过
 * - `3`: 在看
 * - `4`: 搁置
 * - `5`: 抛弃
 * @example 3
 */
export enum SubjectCollectionType {
  Wish = 1,
  Done = 2,
  Doing = 3,
  OnHold = 4,
  Dropped = 5,
}

/**
 * EpisodeCollectionType
 * - `0`: 未收藏
 * - `1`: 想看
 * - `2`: 看过
 * - `3`: 抛弃
 * @example 2
 */
export enum EpisodeCollectionType {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/**
 * Creator
 * 意义同<a href="#model-Me">Me</a>
 */
export interface Creator {
  /** Username */
  username: string;
  /** Nickname */
  nickname: string;
}

/** DetailedRevision */
export interface DetailedRevision {
  /** ID */
  id: number;
  /** Type */
  type: number;
  /** 意义同<a href="#model-Me">Me</a> */
  creator?: Creator;
  /** Summary */
  summary: string;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Data
   * 编辑修改内容，响应类型不固定
   */
  data?: object;
}

/** PersonRevision */
export type PersonRevision = Revision & {
  /** Data */
  data?: Record<string, PersonRevisionDataItem>;
};

/** PersonRevisionDataItem */
export interface PersonRevisionDataItem {
  /** Person Infobox */
  prsn_infobox: string;
  /** Person Summary */
  prsn_summary: string;
  profession: PersonRevisionProfession;
  extra: RevisionExtra;
  /** Person Name */
  prsn_name: string;
}

/** PersonRevisionProfession */
export interface PersonRevisionProfession {
  /** Producer */
  producer?: string;
  /** Mangaka */
  mangaka?: string;
  /** Artist */
  artist?: string;
  /** Seiyu */
  seiyu?: string;
  /** Writer */
  writer?: string;
  /** Illustrator */
  illustrator?: string;
  /** Actor */
  actor?: string;
}

/** RevisionExtra */
export interface RevisionExtra {
  /** Image */
  img?: string;
}

/** SubjectRevision */
export type SubjectRevision = Revision & {
  data?: SubjectRevisionData;
};

/** SubjectRevisionData */
export interface SubjectRevisionData {
  /** Field EPs */
  field_eps: number;
  /** Field Infobox */
  field_infobox: string;
  /** Field Summary */
  field_summary: string;
  /** Name */
  name: string;
  /** Name CN */
  name_cn: string;
  /** Platform */
  platform: number;
  /** Subject ID */
  subject_id: number;
  /** Type */
  type: number;
  /** Type ID */
  type_id: number;
  /** Vote Field */
  vote_field: string;
}

/** CharacterRevision */
export type CharacterRevision = Revision & {
  /** Data */
  data?: any;
};

/** CharacterRevisionDataItem */
export interface CharacterRevisionDataItem {
  /** Character Infobox */
  infobox: string;
  /** Character Summary */
  summary: string;
  /** Character Name */
  name: string;
  extra: RevisionExtra;
}

/**
 * EpType
 * 本篇 = 0
 * 特别篇 = 1
 * OP = 2
 * ED = 3
 * 预告/宣传/广告 = 4
 * MAD = 5
 * 其他 = 6
 */
export enum EpType {
  MainStory = 0,
  SP = 1,
  OP = 2,
  ED = 3,
  PV = 4,
  MAD = 5,
  Other = 6,
}

/**
 * Episode
 * @example {"airdate":"","comment":0,"desc":"","disc":0,"duration":"","ep":6,"id":8,"name":"蒼と白の境界線","name_cn":"","sort":6,"subject_id":15,"type":0,"duration_seconds":1440}
 */
export interface Episode {
  /** ID */
  id: number;
  /**
   * Type
   * `0` 本篇，`1` SP，`2` OP，`3` ED
   */
  type: number;
  /** Name */
  name: string;
  /** Name Cn */
  name_cn: string;
  /**
   * Sort
   * 同类条目的排序和集数
   */
  sort: number;
  /**
   * Ep
   * 条目内的集数, 从`1`开始。非本篇剧集的此字段无意义
   */
  ep?: number;
  /** Airdate */
  airdate: string;
  /** Comment */
  comment: number;
  /**
   * Duration
   * 维基人填写的原始时长
   */
  duration: string;
  /**
   * Desc
   * 简介
   */
  desc: string;
  /**
   * Disc
   * 音乐曲目的碟片数
   */
  disc: number;
  /** 服务器解析的时长，无法解析时为 `0` */
  duration_seconds?: number;
}

/** EpisodeDetail */
export interface EpisodeDetail {
  /** ID */
  id: number;
  /**
   * Type
   * `0` 本篇，`1` SP，`2` OP，`3` ED
   */
  type: number;
  /** Name */
  name: string;
  /** Name Cn */
  name_cn: string;
  /**
   * Sort
   * 同类条目的排序和集数
   */
  sort: number;
  /**
   * Ep
   * 条目内的集数, 从`1`开始。非本篇剧集的此字段无意义
   */
  ep?: number;
  /** Airdate */
  airdate: string;
  /** Comment */
  comment: number;
  /** Duration */
  duration: string;
  /**
   * Desc
   * 简介
   */
  desc: string;
  /**
   * Disc
   * 音乐曲目的碟片数
   */
  disc: number;
  /** Subject ID */
  subject_id: number;
}

/** ErrorDetail */
export interface ErrorDetail {
  /** Title */
  title: string;
  /** Description */
  description: string;
  /** Detail */
  details?:
    | string
    | {
        /** error message */
        error?: string;
        /** request path */
        path?: string;
      };
}

/** Images */
export interface Images {
  /** Large */
  large: string;
  /** Common */
  common: string;
  /** Medium */
  medium: string;
  /** Small */
  small: string;
  /** Grid */
  grid: string;
}

/** Index */
export interface Index {
  /** ID */
  id: number;
  /** Title */
  title: string;
  /** Desc */
  desc: string;
  /**
   * Total
   * 收录条目总数
   * @default 0
   */
  total?: number;
  /**
   * Stat
   * 目录评论及收藏数
   */
  stat: Stat;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
  /** 意义同<a href="#model-Me">Me</a> */
  creator: Creator;
  /**
   * Ban
   * deprecated, always false.
   * @deprecated
   */
  ban: boolean;
  /** 目录是否包括 nsfw 条目 */
  nsfw: boolean;
}

/**
 * IndexSubject
 * 同名字段意义同<a href="#model-Subject">Subject</a>
 */
export interface IndexSubject {
  /** ID */
  id: number;
  /** Type */
  type: number;
  /** Name */
  name: string;
  images?: Images;
  infobox?: WikiV0;
  /** Date */
  date?: string;
  /** Comment */
  comment: string;
  /**
   * Added At
   * @format date-time
   */
  added_at: string;
}

/**
 * IndexBasicInfo
 * 新增或修改条目的内容，同名字段意义同<a href="#model-Subject">Subject</a>
 */
export interface IndexBasicInfo {
  /** Title */
  title?: string;
  /** Description */
  description?: string;
}

/**
 * IndexBasicInfo
 * 新增某条目到目录的请求信息
 */
export interface IndexSubjectAddInfo {
  /** Subject ID */
  subject_id?: number;
  /**
   * Sort
   * 排序条件，越小越靠前
   */
  sort?: number;
  /** Comment */
  comment?: string;
}

/**
 * IndexBasicInfo
 * 修改目录中条目的信息
 */
export interface IndexSubjectEditInfo {
  /**
   * Sort
   * 排序条件，越小越靠前
   */
  sort?: number;
  /** Comment */
  comment?: string;
}

/**
 * Infobox
 * @example [{"key":"简体中文名","value":"鲁路修·兰佩路基"},{"key":"别名","value":[{"v":"L.L."},{"v":"勒鲁什"},{"v":"鲁鲁修"},{"v":"ゼロ"},{"v":"Zero"},{"k":"英文名","v":"Lelouch Lamperouge"},{"k":"第二中文名","v":"鲁路修·冯·布里塔尼亚"},{"k":"英文名二","v":"Lelouch Vie Britannia"},{"k":"日文名","v":"ルルーシュ・ヴィ・ブリタニア"}]},{"key":"性别","value":"男"},{"key":"生日","value":"12月5日"},{"key":"血型","value":"A型"},{"key":"身高","value":"178cm→181cm"},{"key":"体重","value":"54kg"},{"key":"引用来源","value":"Wikipedia"}]
 */
export type WikiV0 = {
  /** Key */
  key: string;
  /** Value */
  value:
    | string
    | (
        | {
            /** K */
            k: string;
            /** V */
            v: string;
          }
        | {
            /** V */
            v: string;
          }
      )[];
}[];

export interface Page {
  /** Total */
  total: number;
  /** Limit */
  limit: number;
  /** Offset */
  offset: number;
}

/** Paged[Episode] */
export interface PagedEpisode {
  /**
   * Total
   * @default 0
   */
  total?: number;
  /**
   * Limit
   * @default 0
   */
  limit?: number;
  /**
   * Offset
   * @default 0
   */
  offset?: number;
  /**
   * Data
   * @default []
   */
  data?: Episode[];
}

/** Paged[IndexSubject] */
export interface PagedIndexSubject {
  /**
   * Total
   * @default 0
   */
  total?: number;
  /**
   * Limit
   * @default 0
   */
  limit?: number;
  /**
   * Offset
   * @default 0
   */
  offset?: number;
  /**
   * Data
   * @default []
   */
  data?: IndexSubject[];
}

/** Paged[Revision] */
export interface PagedRevision {
  /**
   * Total
   * @default 0
   */
  total?: number;
  /**
   * Limit
   * @default 0
   */
  limit?: number;
  /**
   * Offset
   * @default 0
   */
  offset?: number;
  /**
   * Data
   * @default []
   */
  data?: Revision[];
}

/** Paged[UserCollection] */
export interface PagedUserCollection {
  /**
   * Total
   * @default 0
   */
  total?: number;
  /**
   * Limit
   * @default 0
   */
  limit?: number;
  /**
   * Offset
   * @default 0
   */
  offset?: number;
  /**
   * Data
   * @default []
   */
  data?: UserSubjectCollection[];
}

/** Person */
export interface Person {
  /** ID */
  id: number;
  /** Name */
  name: string;
  /** `1`, `2`, `3` 表示 `个人`, `公司`, `组合` */
  type: PersonType;
  career: PersonCareer[];
  /**
   * Images
   * object with some size of images, this object maybe `null`
   */
  images?: PersonImages;
  /** Short Summary */
  short_summary: string;
  /** Locked */
  locked: boolean;
}

/**
 * PersonCareer
 * An enumeration.
 */
export enum PersonCareer {
  Producer = "producer",
  Mangaka = "mangaka",
  Artist = "artist",
  Seiyu = "seiyu",
  Writer = "writer",
  Illustrator = "illustrator",
  Actor = "actor",
}

/** PersonCharacter */
export interface PersonCharacter {
  /** ID */
  id: number;
  /** Name */
  name: string;
  /** 角色，机体，舰船，组织... */
  type: CharacterType;
  /**
   * Images
   * object with some size of images, this object maybe `null`
   */
  images?: PersonImages;
  /** Subject ID */
  subject_id: number;
  /** Subject Name */
  subject_name: string;
  /** Subject Name Cn */
  subject_name_cn: string;
  /** Staff */
  staff?: string;
}

/** PersonDetail */
export interface PersonDetail {
  /** ID */
  id: number;
  /** Name */
  name: string;
  /** `1`, `2`, `3` 表示 `个人`, `公司`, `组合` */
  type: PersonType;
  career: PersonCareer[];
  /**
   * Images
   * object with some size of images, this object maybe `null`
   */
  images?: PersonImages;
  /** Summary */
  summary: string;
  /** Locked */
  locked: boolean;
  /**
   * Last Modified
   * currently it's latest user comment time, it will be replaced by wiki modified date in the future
   * @format date-time
   */
  last_modified: string;
  /**
   * Infobox
   * server parsed infobox, a map from key to string or tuple
   * null if server infobox is not valid
   */
  infobox?: object[];
  /**
   * Gender
   * parsed from wiki, maybe null
   */
  gender?: string;
  /** parsed from wiki, maybe null, `1, 2, 3, 4` for `A, B, AB, O` */
  blood_type?: BloodType;
  /**
   * Birth Year
   * parsed from wiki, maybe `null`
   */
  birth_year?: number;
  /**
   * Birth Mon
   * parsed from wiki, maybe `null`
   */
  birth_mon?: number;
  /**
   * Birth Day
   * parsed from wiki, maybe `null`
   */
  birth_day?: number;
  stat: Stat;
}

/** PersonImages */
export interface PersonImages {
  /** Large */
  large: string;
  /** Medium */
  medium: string;
  /** Small */
  small: string;
  /** Grid */
  grid: string;
}

/**
 * PersonType
 * `1`, `2`, `3` 表示 `个人`, `公司`, `组合`
 */
export enum PersonType {
  Individual = 1,
  Corporation = 2,
  Association = 3,
}

/** RelatedCharacter */
export interface RelatedCharacter {
  /** ID */
  id: number;
  /** Name */
  name: string;
  /** 角色，机体，舰船，组织... */
  type: CharacterType;
  /**
   * Images
   * object with some size of images, this object maybe `null`
   */
  images?: PersonImages;
  /** Relation */
  relation: string;
  /**
   * Actors
   * 演员列表
   * @default []
   */
  actors?: Person[];
}

/** RelatedPerson */
export interface RelatedPerson {
  /** ID */
  id: number;
  /** Name */
  name: string;
  /** `1`, `2`, `3` 表示 `个人`, `公司`, `组合` */
  type: PersonType;
  career: PersonCareer[];
  /**
   * Images
   * object with some size of images, this object maybe `null`
   */
  images?: PersonImages;
  /** Relation */
  relation: string;
}

/** Revision */
export interface Revision {
  /** ID */
  id: number;
  /** Type */
  type: number;
  /** 意义同<a href="#model-Me">Me</a> */
  creator?: Creator;
  /** Summary */
  summary: string;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
}

/** Stat */
export interface Stat {
  /** Comments */
  comments: number;
  /** Collects */
  collects: number;
}

/** Subject */
export interface Subject {
  /** ID */
  id: number;
  /** Type */
  type: SubjectType;
  /** Name */
  name: string;
  /** Name Cn */
  name_cn: string;
  /** Summary */
  summary: string;
  /** Nsfw */
  nsfw: boolean;
  /** Locked */
  locked: boolean;
  /**
   * Date
   * air date in `YYYY-MM-DD` format
   */
  date?: string;
  /**
   * Platform
   * TV, Web, 欧美剧, PS4...
   */
  platform: string;
  images: Images;
  infobox?: WikiV0;
  /**
   * Volumes
   * 书籍条目的册数，由旧服务端从wiki中解析
   */
  volumes: number;
  /**
   * Eps
   * 由旧服务端从wiki中解析，对于书籍条目为`话数`
   */
  eps: number;
  /**
   * Total Episodes
   * 数据库中的章节数量
   */
  total_episodes: number;
  /** Rating */
  rating: {
    /** Rank */
    rank: number;
    /** Total */
    total: number;
    /** Count */
    count: {
      "1"?: number;
      "2"?: number;
      "3"?: number;
      "4"?: number;
      "5"?: number;
      "6"?: number;
      "7"?: number;
      "8"?: number;
      "9"?: number;
      "10"?: number;
    };
    /** Score */
    score: number;
  };
  /** Collection */
  collection: {
    /** Wish */
    wish: number;
    /** Collect */
    collect: number;
    /** Doing */
    doing: number;
    /** On Hold */
    on_hold: number;
    /** Dropped */
    dropped: number;
  };
  tags: SubjectTags;
}

/** SlimSubject */
export interface SlimSubject {
  /** ID */
  id: number;
  /** Type */
  type: SubjectType;
  /** Name */
  name: string;
  /** Name Cn */
  name_cn: string;
  /**
   * Summary
   * 截短后的条目描述。
   */
  short_summary: string;
  /**
   * Date
   * air date in `YYYY-MM-DD` format
   */
  date?: string;
  images: Images;
  /**
   * Volumes
   * 书籍条目的册数，由旧服务端从wiki中解析
   */
  volumes: number;
  /**
   * Eps
   * 由旧服务端从wiki中解析，对于书籍条目为`话数`
   */
  eps: number;
  /**
   * Total
   * 收藏人数
   */
  collection_total: number;
  /**
   * Total
   * 分数
   */
  score: number;
  /** 前 10 个 tag */
  tags: SubjectTags;
}

/** Tags */
export type SubjectTags = {
  /** Name */
  name: string;
  /** Count */
  count: number;
}[];

/**
 * SubjectType
 * 条目类型
 * - `1` 为 书籍
 * - `2` 为 动画
 * - `3` 为 音乐
 * - `4` 为 游戏
 * - `6` 为 三次元
 *
 * 没有 `5`
 * @example 2
 */
export enum SubjectType {
  Book = 1,
  Anime = 2,
  Music = 3,
  Game = 4,
  Real = 6,
}

/** UserSubjectCollection */
export interface UserSubjectCollection {
  /**
   * Subject ID
   * @example 8
   */
  subject_id: number;
  /**
   * 条目类型
   * - `1` 为 书籍
   * - `2` 为 动画
   * - `3` 为 音乐
   * - `4` 为 游戏
   * - `6` 为 三次元
   *
   * 没有 `5`
   */
  subject_type: SubjectType;
  /**
   * Rate
   * @example 4
   */
  rate: number;
  /**
   * - `1`: 想看
   * - `2`: 看过
   * - `3`: 在看
   * - `4`: 搁置
   * - `5`: 抛弃
   */
  type: SubjectCollectionType;
  /**
   * Comment
   * @example "看看"
   */
  comment?: string;
  /**
   * Tags
   * @example ["柯南","万年小学生","推理","青山刚昌","TV"]
   */
  tags: string[];
  /**
   * Ep Status
   * @example 5
   */
  ep_status: number;
  /**
   * Vol Status
   * @example 0
   */
  vol_status: number;
  /**
   * Updated At
   * 本时间并不代表条目的收藏时间。修改评分，评价，章节观看状态等收藏信息时未更新此时间是一个 bug。请不要依赖此特性
   * @format date-time
   * @example "2022-06-19T18:44:13.6140127+08:00"
   */
  updated_at: string;
  /** Private */
  private: boolean;
  subject?: SlimSubject;
}

/**
 * UserSubjectCollectionModifyPayload
 * 所有的字段均可选
 */
export interface UserSubjectCollectionModifyPayload {
  /** 修改条目收藏类型 */
  type?: SubjectCollectionType;
  /**
   * 评分，`0` 表示删除评分
   * @min 0
   * @exclusiveMin false
   * @max 10
   * @exclusiveMax false
   */
  rate?: number;
  /**
   * 只能用于修改书籍条目进度
   * @min 0
   * @exclusiveMin false
   */
  ep_status?: number;
  /**
   * 只能用于修改书籍条目进度
   * @min 0
   * @exclusiveMin false
   */
  vol_status?: number;
  /** 评价 */
  comment?: string;
  /** 仅自己可见 */
  private?: boolean;
  /**
   * 标签
   * 不传或者 `null` 都会被忽略，传 `[]` 则会删除所有 tag。
   */
  tags?: string[];
}

export interface UserEpisodeCollection {
  episode: Episode;
  /**
   * - `0`: 未收藏
   * - `1`: 想看
   * - `2`: 看过
   * - `3`: 抛弃
   */
  type: EpisodeCollectionType;
}

/** RelatedSubject */
export interface V0RelatedSubject {
  /** ID */
  id: number;
  /** Staff */
  staff: string;
  /** Name */
  name?: string;
  /** Name Cn */
  name_cn: string;
  /** Image */
  image?: string;
}

/** SubjectRelation */
export interface V0SubjectRelation {
  /** ID */
  id: number;
  /** Type */
  type: number;
  /** Name */
  name: string;
  /** Name Cn */
  name_cn: string;
  images?: Images;
  /** Relation */
  relation: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://api.bgm.tv" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Bangumi API
 * @version 2023-05-3
 * @baseUrl https://api.bgm.tv
 * @contact Bangumi API (https://github.com/bangumi/api/)
 *
 * 你可以在 <https://next.bgm.tv/demo/access-token> 生成一个 Access Token
 *
 * ## [关于 User Agent](https://github.com/bangumi/api/blob/master/docs-raw/user%20agent.md)
 *
 * 如果你在使用中遇到了问题，请优先使用 GitHub issue 提交问题。在 bangumi 小组发帖可能无法得到及时反馈。
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  calendar = {
    /**
     * No description
     *
     * @tags 条目
     * @name GetCalendar
     * @summary 每日放送
     * @request GET:/calendar
     */
    getCalendar: (params: RequestParams = {}) =>
      this.request<
        {
          weekday?: {
            /** @example "Mon" */
            en?: string;
            /** @example "星期一" */
            cn?: string;
            /** @example "月耀日" */
            ja?: string;
            /** @example 1 */
            id?: number;
          };
          items?: LegacySubjectSmall[];
        }[],
        any
      >({
        path: `/calendar`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  search = {
    /**
     * No description
     *
     * @tags 搜索
     * @name SearchSubjectByKeywords
     * @summary 条目搜索
     * @request GET:/search/subject/{keywords}
     */
    searchSubjectByKeywords: (
      keywords: string,
      query?: {
        /** 条目类型，参考 [SubjectType](#model-Legacy_SubjectType) */
        type?: LegacySubjectType;
        /**
         * 返回数据大小
         * @default "small"
         */
        responseGroup?: "small" | "medium" | "large";
        /** 开始条数 */
        start?: number;
        /**
         * 每页条数 <br> 最多 25
         * @max 25
         */
        max_results?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        | {
            /** 总条数 */
            results?: number;
            /** 结果列表 */
            list?: LegacySubjectSmall[];
          }
        | {
            /** 总条数 */
            results?: number;
            /** 结果列表 */
            list?: LegacySubjectMedium[];
          }
        | {
            /** 总条数 */
            results?: number;
            /** 结果列表 */
            list?: LegacySubjectLarge[];
          },
        any
      >({
        path: `/search/subject/${keywords}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  v0 = {
    /**
     * @description ## 实验性 API， 本 schema 和实际的 API 行为都可能随时发生改动 目前支持的筛选条件包括: - `type`: 条目类型，参照 `SubjectType` enum， `或`。 - `tag`: 标签，可以多次出现。`且` 关系。 - `airdate`: 播出日期/发售日期。`且` 关系。 - `rating`: 用于搜索指定评分的条目。`且` 关系。 - `rank`: 用于搜索指定排名的条目。`且` 关系。 - `nsfw`: 使用 `include` 包含NSFW搜索结果。默认排除搜索NSFW条目。无权限情况下忽略此选项，不会返回NSFW条目。 不同筛选条件之间为 `且` 由于目前 meilisearch 的一些问题，条目排名更新并不会触发搜索数据更新，所以条目排名可能是过期数据。 希望未来版本的 meilisearch 能解决相关的问题。
     *
     * @tags 条目
     * @name SearchSubjects
     * @summary 条目搜索
     * @request POST:/v0/search/subjects
     */
    searchSubjects: (
      data: {
        keyword: string;
        /**
         * 排序规则
         *
         * - `match` meilisearch 的默认排序，按照匹配程度
         * - `heat` 收藏人数
         * - `rank` 排名由高到低
         * - `score` 评分
         * @default "match"
         * @example "rank"
         */
        sort?: "match" | "heat" | "rank" | "score";
        /** 不同条件之间是 `且` 的关系 */
        filter?: {
          /** 条目类型，参照 `SubjectType` enum，多值之间为 `或` 的关系。 */
          type?: SubjectType[];
          /**
           * 标签，可以多次出现。多值之间为 `且` 关系。
           * @example ["童年","原创"]
           */
          tag?: string[];
          /**
           * 播出日期/发售日期，日期必需为 `YYYY-MM-DD` 格式。多值之间为 `且` 关系。
           * @example [">=2020-07-01","<2020-10-01"]
           */
          air_date?: string[];
          /**
           * 用于搜索指定评分的条目，多值之间为 `且` 关系。
           * @example [">=6","<8"]
           */
          rating?: string[];
          /**
           * 用于搜索指定排名的条目，多值之间为 `且` 关系。
           * @example [">10","<=18"]
           */
          rank?: string[];
          /**
           * 无权限的用户会直接忽略此字段，不会返回R18条目。
           *
           * 默认或者 `null` 会返回包含 R18 的所有搜索结果。
           *
           * `true` 只会返回 R18 条目。
           *
           * `false` 只会返回非 R18 条目。
           */
          nsfw?: boolean;
        };
      },
      query?: {
        /** 分页参数 */
        limit?: number;
        /** 分页参数 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * 搜索结果数量
           * @example 100
           */
          total?: number;
          /**
           * 当前分页参数
           * @example 100
           */
          limit?: number;
          /**
           * 当前分页参数
           * @example 100
           */
          offset?: number;
          data?: {
            /**
             * 条目ID
             * @example 8
             */
            id: number;
            /**
             * 条目类型
             * - `1` 为 书籍
             * - `2` 为 动画
             * - `3` 为 音乐
             * - `4` 为 游戏
             * - `6` 为 三次元
             *
             * 没有 `5`
             */
            type?: SubjectType;
            /** 上映/开播/连载开始日期，可能为空字符串 */
            date: string;
            /**
             * 封面
             * @format url
             */
            image: string;
            /** 条目描述 */
            summary: string;
            /** 条目原名 */
            name: string;
            /** 条目中文名 */
            name_cn: string;
            tags: SubjectTags;
            /** 评分 */
            score: number;
            /** 排名 */
            rank: number;
          }[];
        },
        any
      >({
        path: `/v0/search/subjects`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description cache with 300s
     *
     * @tags 条目
     * @name GetSubjectById
     * @summary 获取条目
     * @request GET:/v0/subjects/{subject_id}
     * @secure
     */
    getSubjectById: (subjectId: SubjectID, params: RequestParams = {}) =>
      this.request<Subject, ErrorDetail>({
        path: `/v0/subjects/${subjectId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 条目
     * @name GetSubjectImageById
     * @summary Get Subject Image
     * @request GET:/v0/subjects/{subject_id}/image
     * @secure
     */
    getSubjectImageById: (
      subjectId: SubjectID,
      query: {
        /**
         * Image Type
         * 枚举值 {small|grid|large|medium|common}
         */
        type: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ErrorDetail>({
        path: `/v0/subjects/${subjectId}/image`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 条目
     * @name GetRelatedPersonsBySubjectId
     * @summary Get Subject Persons
     * @request GET:/v0/subjects/{subject_id}/persons
     * @secure
     */
    getRelatedPersonsBySubjectId: (subjectId: SubjectID, params: RequestParams = {}) =>
      this.request<RelatedPerson[], ErrorDetail>({
        path: `/v0/subjects/${subjectId}/persons`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 条目
     * @name GetRelatedCharactersBySubjectId
     * @summary Get Subject Characters
     * @request GET:/v0/subjects/{subject_id}/characters
     * @secure
     */
    getRelatedCharactersBySubjectId: (subjectId: SubjectID, params: RequestParams = {}) =>
      this.request<RelatedCharacter[], ErrorDetail>({
        path: `/v0/subjects/${subjectId}/characters`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 条目
     * @name GetRelatedSubjectsBySubjectId
     * @summary Get Subject Relations
     * @request GET:/v0/subjects/{subject_id}/subjects
     * @secure
     */
    getRelatedSubjectsBySubjectId: (subjectId: SubjectID, params: RequestParams = {}) =>
      this.request<V0SubjectRelation[], ErrorDetail>({
        path: `/v0/subjects/${subjectId}/subjects`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 章节
     * @name GetEpisodes
     * @summary Get Episodes
     * @request GET:/v0/episodes
     * @secure
     */
    getEpisodes: (
      query: {
        /** 条目 ID */
        subject_id: SubjectID;
        /** 参照章节的`type` */
        type?: EpType;
        /**
         * Limit
         * 分页参数
         * @min 1
         * @max 200
         * @default 100
         */
        limit?: number;
        /**
         * Offset
         * 分页参数
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedEpisode, ErrorDetail>({
        path: `/v0/episodes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 章节
     * @name GetEpisodeById
     * @summary Get Episode
     * @request GET:/v0/episodes/{episode_id}
     * @secure
     */
    getEpisodeById: (episodeId: number, params: RequestParams = {}) =>
      this.request<EpisodeDetail, ErrorDetail>({
        path: `/v0/episodes/${episodeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description cache with 60s
     *
     * @tags 角色
     * @name GetCharacterById
     * @summary Get Character Detail
     * @request GET:/v0/characters/{character_id}
     */
    getCharacterById: (characterId: number, params: RequestParams = {}) =>
      this.request<CharacterDetail, ErrorDetail>({
        path: `/v0/characters/${characterId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色
     * @name GetCharacterImageById
     * @summary Get Character Image
     * @request GET:/v0/characters/{character_id}/image
     * @secure
     */
    getCharacterImageById: (
      characterId: number,
      query: {
        /**
         * Image Type
         * 枚举值 {small|grid|large|medium}
         */
        type: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ErrorDetail>({
        path: `/v0/characters/${characterId}/image`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色
     * @name GetRelatedSubjectsByCharacterId
     * @summary get character related subjects
     * @request GET:/v0/characters/{character_id}/subjects
     */
    getRelatedSubjectsByCharacterId: (characterId: number, params: RequestParams = {}) =>
      this.request<V0RelatedSubject[], ErrorDetail>({
        path: `/v0/characters/${characterId}/subjects`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色
     * @name GetRelatedPersonsByCharacterId
     * @summary get character related persons
     * @request GET:/v0/characters/{character_id}/persons
     */
    getRelatedPersonsByCharacterId: (characterId: number, params: RequestParams = {}) =>
      this.request<CharacterPerson[], ErrorDetail>({
        path: `/v0/characters/${characterId}/persons`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description cache with 60s
     *
     * @tags 人物
     * @name GetPersonById
     * @summary Get Person
     * @request GET:/v0/persons/{person_id}
     */
    getPersonById: (personId: number, params: RequestParams = {}) =>
      this.request<PersonDetail, ErrorDetail>({
        path: `/v0/persons/${personId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色
     * @name GetPersonImageById
     * @summary Get Person Image
     * @request GET:/v0/persons/{person_id}/image
     * @secure
     */
    getPersonImageById: (
      personId: number,
      query: {
        /**
         * Image Type
         * 枚举值 {small|grid|large|medium}
         */
        type: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ErrorDetail>({
        path: `/v0/persons/${personId}/image`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 人物
     * @name GetRelatedSubjectsByPersonId
     * @summary get person related subjects
     * @request GET:/v0/persons/{person_id}/subjects
     */
    getRelatedSubjectsByPersonId: (personId: number, params: RequestParams = {}) =>
      this.request<V0RelatedSubject[], ErrorDetail>({
        path: `/v0/persons/${personId}/subjects`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 人物
     * @name GetRelatedCharactersByPersonId
     * @summary get person related characters
     * @request GET:/v0/persons/{person_id}/characters
     */
    getRelatedCharactersByPersonId: (personId: number, params: RequestParams = {}) =>
      this.request<PersonCharacter[], ErrorDetail>({
        path: `/v0/persons/${personId}/characters`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户信息
     *
     * @tags 用户
     * @name GetUserByName
     * @summary Get User by name
     * @request GET:/v0/users/{username}
     */
    getUserByName: (username: string, params: RequestParams = {}) =>
      this.request<User, ErrorDetail>({
        path: `/v0/users/${username}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户头像，302 重定向至头像地址，设置了 username 之后无法使用 UID 查询。
     *
     * @tags 用户
     * @name GetUserAvatarByName
     * @summary Get User Avatar by name
     * @request GET:/v0/users/{username}/avatar
     */
    getUserAvatarByName: (
      username: string,
      query: {
        /**
         * Avatar Type
         * 枚举值 {small|large|medium}
         */
        type: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ErrorDetail>({
        path: `/v0/users/${username}/avatar`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 返回当前 Access Token 对应的用户信息
     *
     * @tags 用户
     * @name GetMyself
     * @summary Get User
     * @request GET:/v0/me
     * @secure
     */
    getMyself: (params: RequestParams = {}) =>
      this.request<User, ErrorDetail>({
        path: `/v0/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取对应用户的收藏，查看私有收藏需要access token。
     *
     * @tags 收藏
     * @name GetUserCollectionsByUsername
     * @summary 获取用户收藏
     * @request GET:/v0/users/{username}/collections
     * @secure
     */
    getUserCollectionsByUsername: (
      username: string,
      query?: {
        /**
         * 条目类型，默认为全部
         *
         * 具体含义见 [SubjectType](#model-SubjectType)
         */
        subject_type?: SubjectType;
        /**
         * 收藏类型，默认为全部
         *
         * 具体含义见 [CollectionType](#model-CollectionType)
         */
        type?: SubjectCollectionType;
        /**
         * Limit
         * 分页参数
         * @min 1
         * @max 50
         * @default 30
         */
        limit?: number;
        /**
         * Offset
         * 分页参数
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedUserCollection, ErrorDetail>({
        path: `/v0/users/${username}/collections`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取对应用户的收藏，查看私有收藏需要access token。
     *
     * @tags 收藏
     * @name GetUserCollection
     * @summary 获取用户单个收藏
     * @request GET:/v0/users/{username}/collections/{subject_id}
     * @secure
     */
    getUserCollection: (username: string, subjectId: SubjectID, params: RequestParams = {}) =>
      this.request<UserSubjectCollection, ErrorDetail>({
        path: `/v0/users/${username}/collections/${subjectId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 修改条目收藏状态, 如果不存在则创建，如果存在则修改 由于直接修改剧集条目的完成度可能会引起意料之外效果，只能用于修改书籍类条目的完成度。 方法的所有请求体字段均可选
     *
     * @tags 收藏
     * @name PostUserCollection
     * @summary 新增或修改用户单个收藏
     * @request POST:/v0/users/-/collections/{subject_id}
     * @secure
     */
    postUserCollection: (subjectId: SubjectID, data: UserSubjectCollectionModifyPayload, params: RequestParams = {}) =>
      this.request<void, ErrorDetail>({
        path: `/v0/users/-/collections/${subjectId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 修改条目收藏状态 由于直接修改剧集条目的完成度可能会引起意料之外效果，只能用于修改书籍类条目的完成度。 PATCH 方法的所有请求体字段均可选
     *
     * @tags 收藏
     * @name PatchUserCollection
     * @summary 修改用户单个收藏
     * @request PATCH:/v0/users/-/collections/{subject_id}
     * @secure
     */
    patchUserCollection: (subjectId: SubjectID, data: UserSubjectCollectionModifyPayload, params: RequestParams = {}) =>
      this.request<void, ErrorDetail>({
        path: `/v0/users/-/collections/${subjectId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏
     * @name GetUserSubjectEpisodeCollection
     * @summary 章节收藏信息
     * @request GET:/v0/users/-/collections/{subject_id}/episodes
     * @secure
     */
    getUserSubjectEpisodeCollection: (
      subjectId: SubjectID,
      query?: {
        /**
         * Offset
         * 分页参数
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * Limit
         * 分页参数
         * @min 1
         * @max 1000
         * @default 100
         */
        limit?: number;
        /** 章节类型，不传则不按照章节进行筛选 */
        episode_type?: EpType;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        Page & {
          data?: UserEpisodeCollection[];
        },
        ErrorDetail
      >({
        path: `/v0/users/-/collections/${subjectId}/episodes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 同时会重新计算条目的完成度
     *
     * @tags 收藏
     * @name PatchUserSubjectEpisodeCollection
     * @summary 章节收藏信息
     * @request PATCH:/v0/users/-/collections/{subject_id}/episodes
     * @secure
     */
    patchUserSubjectEpisodeCollection: (
      subjectId: SubjectID,
      data: {
        /** @example [1,2,8] */
        episode_id: number[];
        /**
         * - `0`: 未收藏
         * - `1`: 想看
         * - `2`: 看过
         * - `3`: 抛弃
         */
        type: EpisodeCollectionType;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorDetail>({
        path: `/v0/users/-/collections/${subjectId}/episodes`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏
     * @name GetUserEpisodeCollection
     * @summary 章节收藏信息
     * @request GET:/v0/users/-/collections/-/episodes/{episode_id}
     * @secure
     */
    getUserEpisodeCollection: (episodeId: number, params: RequestParams = {}) =>
      this.request<UserEpisodeCollection, ErrorDetail>({
        path: `/v0/users/-/collections/-/episodes/${episodeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏
     * @name PutUserEpisodeCollection
     * @summary 更新章节收藏信息
     * @request PUT:/v0/users/-/collections/-/episodes/{episode_id}
     * @secure
     */
    putUserEpisodeCollection: (
      episodeId: number,
      data: {
        /**
         * - `0`: 未收藏
         * - `1`: 想看
         * - `2`: 看过
         * - `3`: 抛弃
         */
        type: EpisodeCollectionType;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorDetail>({
        path: `/v0/users/-/collections/-/episodes/${episodeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 编辑历史
     * @name GetPersonRevisions
     * @summary Get Person Revisions
     * @request GET:/v0/revisions/persons
     */
    getPersonRevisions: (
      query: {
        /**
         * Person ID
         * 角色 ID
         * @min 1
         */
        person_id: number;
        /**
         * Limit
         * 分页参数
         * @min 1
         * @max 50
         * @default 30
         */
        limit?: number;
        /**
         * Offset
         * 分页参数
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedRevision, ErrorDetail>({
        path: `/v0/revisions/persons`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 编辑历史
     * @name GetPersonRevisionByRevisionId
     * @summary Get Person Revision
     * @request GET:/v0/revisions/persons/{revision_id}
     */
    getPersonRevisionByRevisionId: (revisionId: number, params: RequestParams = {}) =>
      this.request<PersonRevision, ErrorDetail>({
        path: `/v0/revisions/persons/${revisionId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 编辑历史
     * @name GetCharacterRevisions
     * @summary Get Character Revisions
     * @request GET:/v0/revisions/characters
     */
    getCharacterRevisions: (
      query: {
        /**
         * Character ID
         * 角色 ID
         * @min 1
         */
        character_id: number;
        /**
         * Limit
         * 分页参数
         * @min 1
         * @max 50
         * @default 30
         */
        limit?: number;
        /**
         * Offset
         * 分页参数
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedRevision, ErrorDetail>({
        path: `/v0/revisions/characters`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 编辑历史
     * @name GetCharacterRevisionByRevisionId
     * @summary Get Character Revision
     * @request GET:/v0/revisions/characters/{revision_id}
     */
    getCharacterRevisionByRevisionId: (revisionId: number, params: RequestParams = {}) =>
      this.request<CharacterRevision, ErrorDetail>({
        path: `/v0/revisions/characters/${revisionId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 编辑历史
     * @name GetSubjectRevisions
     * @summary Get Subject Revisions
     * @request GET:/v0/revisions/subjects
     */
    getSubjectRevisions: (
      query: {
        /**
         * Subject ID
         * 条目 ID
         * @min 1
         */
        subject_id: number;
        /**
         * Limit
         * 分页参数
         * @min 1
         * @max 50
         * @default 30
         */
        limit?: number;
        /**
         * Offset
         * 分页参数
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedRevision, ErrorDetail>({
        path: `/v0/revisions/subjects`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 编辑历史
     * @name GetSubjectRevisionByRevisionId
     * @summary Get Subject Revision
     * @request GET:/v0/revisions/subjects/{revision_id}
     */
    getSubjectRevisionByRevisionId: (revisionId: number, params: RequestParams = {}) =>
      this.request<SubjectRevision, ErrorDetail>({
        path: `/v0/revisions/subjects/${revisionId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 编辑历史
     * @name GetEpisodeRevisions
     * @summary Get Episode Revisions
     * @request GET:/v0/revisions/episodes
     */
    getEpisodeRevisions: (
      query: {
        /**
         * Episode ID
         * 章节 ID
         * @min 1
         */
        episode_id: number;
        /**
         * Limit
         * 分页参数
         * @min 1
         * @max 50
         * @default 30
         */
        limit?: number;
        /**
         * Offset
         * 分页参数
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PagedRevision, ErrorDetail>({
        path: `/v0/revisions/episodes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 编辑历史
     * @name GetEpisodeRevisionByRevisionId
     * @summary Get Episode Revision
     * @request GET:/v0/revisions/episodes/{revision_id}
     */
    getEpisodeRevisionByRevisionId: (revisionId: number, params: RequestParams = {}) =>
      this.request<DetailedRevision, ErrorDetail>({
        path: `/v0/revisions/episodes/${revisionId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 目录
     * @name NewIndex
     * @summary Create a new index
     * @request POST:/v0/indices
     * @secure
     */
    newIndex: (params: RequestParams = {}) =>
      this.request<Index, ErrorDetail>({
        path: `/v0/indices`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 目录
     * @name GetIndexById
     * @summary Get Index By ID
     * @request GET:/v0/indices/{index_id}
     * @secure
     */
    getIndexById: (indexId: number, params: RequestParams = {}) =>
      this.request<Index, ErrorDetail>({
        path: `/v0/indices/${indexId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 目录
     * @name EditIndexById
     * @summary Edit index's information
     * @request PUT:/v0/indices/{index_id}
     * @secure
     */
    editIndexById: (indexId: number, data: IndexBasicInfo, params: RequestParams = {}) =>
      this.request<Index, ErrorDetail>({
        path: `/v0/indices/${indexId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 目录
     * @name GetIndexSubjectsByIndexId
     * @summary Get Index Subjects
     * @request GET:/v0/indices/{index_id}/subjects
     * @secure
     */
    getIndexSubjectsByIndexId: (
      indexId: number,
      query?: {
        /** 条目类型 */
        type?: SubjectType;
        /**
         * Limit
         * 分页参数
         * @min 1
         * @max 50
         * @default 30
         */
        limit?: number;
        /**
         * Offset
         * 分页参数
         * @min 0
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorDetail>({
        path: `/v0/indices/${indexId}/subjects`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 目录
     * @name AddSubjectToIndexByIndexId
     * @summary Add a subject to Index
     * @request POST:/v0/indices/{index_id}/subjects
     * @secure
     */
    addSubjectToIndexByIndexId: (indexId: number, data: IndexSubjectAddInfo, params: RequestParams = {}) =>
      this.request<any, ErrorDetail>({
        path: `/v0/indices/${indexId}/subjects`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 如果条目不存在于目录，会创建该条目
     *
     * @tags 目录
     * @name EditIndexSubjectsByIndexIdAndSubjectId
     * @summary Edit subject information in a index
     * @request PUT:/v0/indices/{index_id}/subjects/{subject_id}
     * @secure
     */
    editIndexSubjectsByIndexIdAndSubjectId: (
      indexId: number,
      subjectId: SubjectID,
      data: IndexSubjectEditInfo,
      params: RequestParams = {},
    ) =>
      this.request<any, ErrorDetail>({
        path: `/v0/indices/${indexId}/subjects/${subjectId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 目录
     * @name DelelteSubjectFromIndexByIndexIdAndSubjectId
     * @summary Delete a subject from a Index
     * @request DELETE:/v0/indices/{index_id}/subjects/{subject_id}
     * @secure
     */
    delelteSubjectFromIndexByIndexIdAndSubjectId: (indexId: number, subjectId: SubjectID, params: RequestParams = {}) =>
      this.request<any, ErrorDetail>({
        path: `/v0/indices/${indexId}/subjects/${subjectId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 为当前用户收藏一条目录
     *
     * @tags 目录
     * @name CollectIndexByIndexIdAndUserId
     * @summary Collect index for current user
     * @request POST:/v0/indices/{index_id}/collect
     * @secure
     */
    collectIndexByIndexIdAndUserId: (indexId: number, params: RequestParams = {}) =>
      this.request<any, ErrorDetail>({
        path: `/v0/indices/${indexId}/collect`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description 为当前用户取消收藏一条目录
     *
     * @tags 目录
     * @name UncollectIndexByIndexIdAndUserId
     * @summary Uncollect index for current user
     * @request DELETE:/v0/indices/{index_id}/collect
     * @secure
     */
    uncollectIndexByIndexIdAndUserId: (indexId: number, params: RequestParams = {}) =>
      this.request<any, ErrorDetail>({
        path: `/v0/indices/${indexId}/collect`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}

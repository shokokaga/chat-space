# db設計

## usersテーブル

｜Column|Type|Options|
｜------|----|-------|
|username|string|null: false|
|mail|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users

## messagesテーブル
｜Column|Type|Options|
｜------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|post|text||
|image|binary||
|group_id|integer|null: false|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
｜Column|Type|Options|
｜------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|groupname|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
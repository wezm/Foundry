package net.wezm.model

import net.liftweb._
import mapper._

class User extends ProtoUser[User] with LongKeyedMapper[User] {
  def getSingleton = User
}

object User extends User with LongKeyedMetaMapper[User]
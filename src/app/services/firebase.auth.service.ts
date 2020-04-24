import { Injectable } from '@angular/core'
import { auth } from 'firebase/app'
// import { AngularFireAuth } from '@angular/fire/auth'
// import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'
import { NzNotificationService } from 'ng-zorro-antd'

interface User {
  uid: string
  email: string
  displayName: string
  photoURL: string
  emailVerified: boolean
  role: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    // public afs: AngularFirestore,
    // public afAuth: AngularFireAuth,
    public router: Router,
    private notification: NzNotificationService,
  ) {
    localStorage.setItem('user', JSON.stringify({ name: 'Hello', role: 'admin' }))
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     const _user = JSON.parse(JSON.stringify(user))
    //     // TODO: add role to backend user model and remove this fake role
    //     localStorage.setItem('user', JSON.stringify({ ..._user, role: 'admin' }))
    //   } else {
    //     localStorage.setItem('user', null)
    //   }
    // })
  }

  async SignIn(email: string, password: string) {
    try {
      // await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['dashboard/alpha'])
      this.notification.success(
        'Logged In',
        'You have successfully logged in to Clean UI Angular Admin Template!',
      )
    } catch (error) {
      this.notification.error(error.code, error.message)
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'))
    return user !== null
  }

  async SignOut() {
    // await this.afAuth.auth.signOut()
    localStorage.removeItem('user')
    this.router.navigate(['auth/login'])
  }
}
